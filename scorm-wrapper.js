// SCORM Wrapper for PCR Course
const SCORM = {
    version: null,
    initialized: false,
    api: null,

    init() {
        this.api = this.findAPI(window);
        if (this.api) {
            if (this.api.Initialize && this.api.Initialize('')) {
                this.version = '1.2';
                this.initialized = true;
            } else if (this.api.Initialize && this.api.Initialize()) {
                this.version = '2004';
                this.initialized = true;
            }
        }
        return this.initialized;
    },

    findAPI(win) {
        let findAttempts = 0;
        const findAPITries = 500;
        
        while ((!win.API && !win.API_1484_11) && 
               (win.parent && win.parent !== win) && 
               (findAttempts <= findAPITries)) {
            findAttempts++;
            win = win.parent;
        }
        
        return win.API || win.API_1484_11;
    },

    setValue(parameter, value) {
        if (!this.initialized || !this.api) return;
        
        if (this.version === '1.2') {
            this.api.LMSSetValue(parameter, value);
            this.api.LMSCommit('');
        } else if (this.version === '2004') {
            this.api.SetValue(parameter, value);
            this.api.Commit('');
        }
    },

    getValue(parameter) {
        if (!this.initialized || !this.api) return '';
        
        if (this.version === '1.2') {
            return this.api.LMSGetValue(parameter);
        } else if (this.version === '2004') {
            return this.api.GetValue(parameter);
        }
    },

    setScore(score) {
        if (this.version === '1.2') {
            this.setValue('cmi.core.score.raw', score);
        } else {
            this.setValue('cmi.score.raw', score);
        }
    },

    setProgress(progress) {
        if (this.version === '1.2') {
            this.setValue('cmi.core.lesson_location', progress.toString());
        } else {
            this.setValue('cmi.progress_measure', progress);
        }
    },

    setCompleted() {
        if (this.version === '1.2') {
            this.setValue('cmi.core.lesson_status', 'completed');
        } else {
            this.setValue('cmi.completion_status', 'completed');
        }
    },

    terminate() {
        if (!this.initialized || !this.api) return;
        
        if (this.version === '1.2') {
            this.api.LMSFinish('');
        } else if (this.version === '2004') {
            this.api.Terminate('');
        }
        this.initialized = false;
    }
};

// Initialize SCORM when page loads
window.addEventListener('load', () => {
    if (SCORM.init()) {
        console.log('✅ SCORM API initialized successfully');
    } else {
        console.log('❌ SCORM API initialization failed');
    }
});

// Handle page unload
window.addEventListener('beforeunload', () => {
    SCORM.terminate();
});