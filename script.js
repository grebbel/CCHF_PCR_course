document.addEventListener('DOMContentLoaded', () => {

     // 🆕 ADD: SCORM Progress Tracking
    let courseProgress = {
        chaptersVisited: new Set(),
        totalChapters: 6,
        quizzesCompleted: { quiz1: false, rtExercise: false, multiplexExercise: false },
        startTime: new Date()
    };
    
    // Initialize SCORM
    if (window.scormAPI && window.scormAPI.isScormAvailable()) {
        console.log('✅ SCORM tracking active');
        window.scormSetProgress(0);
    }

    // Chapter Navigation Logic
    const chapterItems = document.querySelectorAll('.chapter-item');
    const contentSections = document.querySelectorAll('.content-section');

    chapterItems.forEach(item => {
        item.addEventListener('click', () => {
            chapterItems.forEach(chapter => chapter.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            item.classList.add('active');
            const tabId = item.dataset.tab;
            document.getElementById(tabId).classList.add('active');

                // 🆕 ADD: Track chapter visits
    courseProgress.chaptersVisited.add(tabId);
    updateCourseProgress();

        // Scroll to top when clicking sidebar chapters
        window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // PCR Interactive Slides
    const slides = document.querySelectorAll('#pcr-principle .slide');
    const totalSlides = slides.length;
    let currentSlide = 0;
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressFill = document.getElementById('progressFill');
    const stepCounter = document.getElementById('stepCounter');

    function updateSlide() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');
        const progressPercent = ((currentSlide + 1) / totalSlides) * 100;
        progressFill.style.width = progressPercent + '%';
        stepCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlide();
        }
    }

    function previousSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide();
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', previousSlide);
    }

    document.addEventListener('keydown', (e) => {
        const activeChapter = document.querySelector('.chapter-item.active');
        if (activeChapter && activeChapter.dataset.tab === 'pcr-principle') {
            if (e.key === 'ArrowLeft') {
                previousSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        }
    });

    if (slides.length > 0) {
        updateSlide();
    }

    // Real-time PCR Slides
    const rtpcrSlides = document.querySelectorAll('#realtime-pcr .slide');
    const rtpcrTotalSlides = rtpcrSlides.length;
    let rtpcrCurrentSlide = 0;
    const rtpcrPrevBtn = document.getElementById('rtpcrPrevBtn');
    const rtpcrNextBtn = document.getElementById('rtpcrNextBtn');
    const rtpcrProgressFill = document.getElementById('rtpcrProgressFill');
    const rtpcrStepCounter = document.getElementById('rtpcrStepCounter');

    function updateRtpcrSlide() {
        if (rtpcrSlides.length === 0) return;
        rtpcrSlides.forEach(slide => slide.classList.remove('active'));
        if (rtpcrSlides[rtpcrCurrentSlide]) {
            rtpcrSlides[rtpcrCurrentSlide].classList.add('active');
        }
        const progressPercent = ((rtpcrCurrentSlide + 1) / rtpcrTotalSlides) * 100;
        if (rtpcrProgressFill) {
            rtpcrProgressFill.style.width = progressPercent + '%';
        }
        if (rtpcrStepCounter) {
            rtpcrStepCounter.textContent = `${rtpcrCurrentSlide + 1} / ${rtpcrTotalSlides}`;
        }
        if (rtpcrPrevBtn) {
            rtpcrPrevBtn.disabled = rtpcrCurrentSlide === 0;
        }
        if (rtpcrNextBtn) {
            rtpcrNextBtn.disabled = rtpcrCurrentSlide === rtpcrTotalSlides - 1;
        }
    }

    function nextRtpcrSlide() {
        if (rtpcrCurrentSlide < rtpcrTotalSlides - 1) {
            rtpcrCurrentSlide++;
            updateRtpcrSlide();
        }
    }

    function previousRtpcrSlide() {
        if (rtpcrCurrentSlide > 0) {
            rtpcrCurrentSlide--;
            updateRtpcrSlide();
        }
    }

    if (rtpcrNextBtn) {
        rtpcrNextBtn.addEventListener('click', nextRtpcrSlide);
    }
    if (rtpcrPrevBtn) {
        rtpcrPrevBtn.addEventListener('click', previousRtpcrSlide);
    }

    document.addEventListener('keydown', (e) => {
        const activeChapter = document.querySelector('.chapter-item.active');
        if (activeChapter && activeChapter.dataset.tab === 'realtime-pcr') {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                previousRtpcrSlide();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextRtpcrSlide();
            }
        }
    });

    if (rtpcrSlides.length > 0) {
        updateRtpcrSlide();
    }

    // TaqMan Slides
    const taqmanSlides = document.querySelectorAll('#taqman-probe .slide');
    const taqmanTotalSlides = taqmanSlides.length;
    let taqmanCurrentSlide = 0;
    const taqmanPrevBtn = document.getElementById('taqmanPrevBtn');
    const taqmanNextBtn = document.getElementById('taqmanNextBtn');
    const taqmanProgressFill = document.getElementById('taqmanProgressFill');
    const taqmanStepCounter = document.getElementById('taqmanStepCounter');

    function updateTaqmanSlide() {
        if (taqmanSlides.length === 0) return;
        taqmanSlides.forEach(slide => slide.classList.remove('active'));
        if (taqmanSlides[taqmanCurrentSlide]) {
            taqmanSlides[taqmanCurrentSlide].classList.add('active');
        }
        const progressPercent = ((taqmanCurrentSlide + 1) / taqmanTotalSlides) * 100;
        if (taqmanProgressFill) {
            taqmanProgressFill.style.width = progressPercent + '%';
        }
        if (taqmanStepCounter) {
            taqmanStepCounter.textContent = `${taqmanCurrentSlide + 1} / ${taqmanTotalSlides}`;
        }
        if (taqmanPrevBtn) {
            taqmanPrevBtn.disabled = taqmanCurrentSlide === 0;
        }
        if (taqmanNextBtn) {
            taqmanNextBtn.disabled = taqmanCurrentSlide === taqmanTotalSlides - 1;
        }
    }

    function nextTaqmanSlide() {
        if (taqmanCurrentSlide < taqmanTotalSlides - 1) {
            taqmanCurrentSlide++;
            updateTaqmanSlide();
        }
    }

    function previousTaqmanSlide() {
        if (taqmanCurrentSlide > 0) {
            taqmanCurrentSlide--;
            updateTaqmanSlide();
        }
    }

    if (taqmanNextBtn) {
        taqmanNextBtn.addEventListener('click', nextTaqmanSlide);
    }
    if (taqmanPrevBtn) {
        taqmanPrevBtn.addEventListener('click', previousTaqmanSlide);
    }

    document.addEventListener('keydown', (e) => {
        const activeChapter = document.querySelector('.chapter-item.active');
        if (activeChapter && activeChapter.dataset.tab === 'taqman-probe') {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                previousTaqmanSlide();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextTaqmanSlide();
            }
        }
    });

    if (taqmanSlides.length > 0) {
        updateTaqmanSlide();
    }

    // Troubleshooting Dashboard Functionality
    const troubleshootingDashboardBtn = document.getElementById('troubleshootingDashboardBtn');
    const troubleshootingDashboard = document.getElementById('troubleshootingDashboard');

    if (troubleshootingDashboardBtn && troubleshootingDashboard) {
        troubleshootingDashboardBtn.addEventListener('click', function() {
            // Toggle dashboard visibility
            if (troubleshootingDashboard.classList.contains('active')) {
                // Hide dashboard
                troubleshootingDashboard.classList.remove('active');
                troubleshootingDashboardBtn.textContent = 'Continue to troubleshooting dashboard';
                
                // Scroll back to button
                troubleshootingDashboardBtn.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            } else {
                // Show dashboard
                troubleshootingDashboard.classList.add('active');
                troubleshootingDashboardBtn.textContent = 'Hide troubleshooting dashboard';
                
                // Scroll to dashboard with slight delay to allow animation
                setTimeout(() => {
                    troubleshootingDashboard.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }, 100);
            }
        });
    }

    // Quiz Functionality
    const quiz1Form = document.getElementById('quiz1Form');
    const quiz1Feedback = document.getElementById('quiz1Feedback');
    const quiz1Status = document.getElementById('quiz1Status');
    const quiz1Score = document.getElementById('quiz1Score');
    const submitBtn = document.getElementById('submitQuiz1');
    const retryBtn = document.getElementById('retryQuiz1');

    let quizData = {
        quiz1: {
            attempts: 0,
            completed: false,
            score: 0,
            correctAnswer: 'd',
            startTime: null,
            endTime: null
        }
    };

    function reportToLMS(quizId, score, completion) {
        if (typeof window.API !== 'undefined') {
            window.API.LMSSetValue('cmi.core.score.raw', score);
            window.API.LMSSetValue('cmi.core.lesson_status', completion ? 'completed' : 'incomplete');
            window.API.LMSCommit('');
        } else if (typeof window.API_1484_11 !== 'undefined') {
            window.API_1484_11.SetValue('cmi.score.raw', score);
            window.API_1484_11.SetValue('cmi.completion_status', completion ? 'completed' : 'incomplete');
            window.API_1484_11.Commit('');
        } else {
            const lmsData = {
                quizId: quizId,
                score: score,
                completion: completion,
                timestamp: new Date().toISOString()
            };
            try {
                const existingData = JSON.parse(localStorage.getItem('pcr_course_data') || '[]');
                existingData.push(lmsData);
                localStorage.setItem('pcr_course_data', JSON.stringify(existingData));
            } catch (e) {
                console.log('LMS data storage not available');
            }
        }
    }

    if (quiz1Form) {
        quiz1Form.addEventListener('submit', function(e) {
            e.preventDefault();
            const selectedAnswer = document.querySelector('input[name="quiz1Answer"]:checked');
            if (!selectedAnswer) {
                alert('Please select an answer before submitting.');
                return;
            }
            
            // Increment attempts and store end time
            quizData.quiz1.attempts++;
            quizData.quiz1.endTime = new Date();
            
            // Check if this is a retry and reset previous visual states if needed
            const previousFeedback = document.querySelectorAll('.quiz-option.correct, .quiz-option.incorrect');
            previousFeedback.forEach(option => {
                option.classList.remove('correct', 'incorrect');
                const indicator = option.querySelector('.option-indicator');
                if (indicator) {
                    indicator.textContent = '';
                }
            });
            
            const userAnswer = selectedAnswer.value;
            const isCorrect = userAnswer === quizData.quiz1.correctAnswer;
            
            const allOptions = document.querySelectorAll('.quiz-option');
            allOptions.forEach(option => {
                option.classList.add('disabled');
                const input = option.querySelector('input');
                input.disabled = true;
                
                const indicator = option.querySelector('.option-indicator');
                if (input.value === quizData.quiz1.correctAnswer) {
                    option.classList.add('correct');
                    indicator.textContent = '✓';
                } else if (input.checked && input.value !== quizData.quiz1.correctAnswer) {
                    option.classList.add('incorrect');
                    indicator.textContent = '✗';
                }
            });
            
            quiz1Feedback.style.display = 'block';
            const feedbackIcon = quiz1Feedback.querySelector('.feedback-icon');
            const feedbackTitle = quiz1Feedback.querySelector('.feedback-title');
            
            if (isCorrect) {
                feedbackIcon.classList.add('correct');
                feedbackIcon.textContent = '✓';
                feedbackTitle.textContent = 'Correct!';
                quiz1Status.textContent = 'Completed';
                quiz1Status.classList.add('completed');
                quizData.quiz1.score = 100;
                quizData.quiz1.completed = true;
            // 🆕 ADD: SCORM tracking
                courseProgress.quizzesCompleted.quiz1 = true;
            if (window.scormAPI) {
                window.scormAPI.recordInteraction('quiz1', 'choice', userAnswer, 'correct', quizData.quiz1.correctAnswer);
                }
                updateCourseProgress();
                addToScore(100);
                quiz1Score.style.display = 'block';
                quiz1Score.querySelector('.score-value').textContent = '100%';
            } else {
                feedbackIcon.classList.add('incorrect');
                feedbackIcon.textContent = '✗';
                feedbackTitle.textContent = 'Incorrect. The correct answer is highlighted above.';
                quiz1Status.textContent = 'Failed';
                quiz1Status.classList.add('failed');
                quizData.quiz1.score = 0;
                quiz1Score.style.display = 'block';
                quiz1Score.querySelector('.score-value').textContent = '0%';
                retryBtn.style.display = 'inline-block';
            }
            
            submitBtn.style.display = 'none';
            reportToLMS('quiz1', quizData.quiz1.score, quizData.quiz1.completed);
            quiz1Feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
    
    if (retryBtn) {
        retryBtn.addEventListener('click', function() {
            const allOptions = document.querySelectorAll('.quiz-option');
            allOptions.forEach(option => {
                // Remove all state classes
                option.classList.remove('disabled', 'correct', 'incorrect', 'selected');
                
                // Reset input state
                const input = option.querySelector('input');
                if (input) {
                    input.disabled = false;
                    input.checked = false;
                }
                
                // Reset indicator
                const indicator = option.querySelector('.option-indicator');
                if (indicator) {
                    indicator.textContent = '';
                    indicator.style.display = 'none';
                }
                
                // Remove any custom styles
                option.style.backgroundColor = '';
                option.style.borderColor = '';
            });
            
            quiz1Feedback.style.display = 'none';
            quiz1Status.textContent = 'Not Started';
            quiz1Status.classList.remove('completed', 'failed');
            quiz1Score.style.display = 'none';
            submitBtn.style.display = 'inline-block';
            retryBtn.style.display = 'none';
            quizData.quiz1.startTime = new Date();
            quiz1Form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    document.querySelectorAll('input[name="quiz1Answer"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (!quizData.quiz1.startTime) {
                quizData.quiz1.startTime = new Date();
                quiz1Status.textContent = 'In Progress';
            }
        });
    });

    // Reverse Transcriptase Exercise Functionality
    const rtExerciseForm = document.getElementById('rtExerciseForm');
    const rtExerciseFeedback = document.getElementById('rtExerciseFeedback');
    const rtExerciseStatus = document.getElementById('rtExerciseStatus');
    const rtExerciseScore = document.getElementById('rtExerciseScore');
    const submitRtExerciseBtn = document.getElementById('submitRtExercise');
    const retryRtExerciseBtn = document.getElementById('retryRtExercise');

    let rtExerciseData = {
        attempts: 0,
        completed: false,
        score: 0,
        correctAnswer: 'b',
        startTime: null,
        endTime: null
    };

    if (rtExerciseForm) {
        rtExerciseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const selectedAnswer = document.querySelector('input[name="rtExerciseAnswer"]:checked');
            if (!selectedAnswer) {
                alert('Please select an answer before submitting.');
                return;
            }
            rtExerciseData.attempts++;
            rtExerciseData.endTime = new Date();
            const userAnswer = selectedAnswer.value;
            const isCorrect = userAnswer === rtExerciseData.correctAnswer;
            const allRtInputs = document.querySelectorAll('input[name="rtExerciseAnswer"]');
            allRtInputs.forEach(input => {
                const option = input.closest('.quiz-option');
                if (!option) return;
                option.classList.add('disabled');
                input.disabled = true;
                const indicator = option.querySelector('.option-indicator');
                if (!indicator) return;
                if (input.value === rtExerciseData.correctAnswer) {
                    option.classList.add('correct');
                    indicator.textContent = '✓';
                    indicator.style.display = 'flex';
                } else if (input.checked && input.value !== rtExerciseData.correctAnswer) {
                    option.classList.add('incorrect');
                    indicator.textContent = '✗';
                    indicator.style.display = 'flex';
                }
            });
            rtExerciseFeedback.style.display = 'block';
            const feedbackIcon = rtExerciseFeedback.querySelector('.feedback-icon');
            const feedbackTitle = rtExerciseFeedback.querySelector('.feedback-title');
            if (isCorrect) {
                feedbackIcon.classList.add('correct');
                feedbackIcon.textContent = '✓';
                feedbackTitle.textContent = 'Correct!';
                rtExerciseStatus.textContent = 'Completed';
                rtExerciseStatus.classList.add('completed');
                rtExerciseData.score = 100;
                rtExerciseData.completed = true;
                // 🆕 ADD: SCORM tracking
                courseProgress.quizzesCompleted.rtExercise = true;
                updateCourseProgress();
                addToScore(100);
                rtExerciseScore.style.display = 'block';
                rtExerciseScore.querySelector('.score-value').textContent = '100%';
            } else {
                feedbackIcon.classList.add('incorrect');
                feedbackIcon.textContent = '✗';
                feedbackTitle.textContent = 'Incorrect. The correct answer is highlighted above.';
                rtExerciseStatus.textContent = 'Failed';
                rtExerciseStatus.classList.add('failed');
                rtExerciseData.score = 0;
                rtExerciseScore.style.display = 'block';
                rtExerciseScore.querySelector('.score-value').textContent = '0%';
                retryRtExerciseBtn.style.display = 'inline-block';
            }
            submitRtExerciseBtn.style.display = 'none';
            reportToLMS('rtExercise', rtExerciseData.score, rtExerciseData.completed);
            rtExerciseFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
    
    if (retryRtExerciseBtn) {
        retryRtExerciseBtn.addEventListener('click', function() {
            const allRtInputs = document.querySelectorAll('input[name="rtExerciseAnswer"]');
            allRtInputs.forEach(input => {
                const option = input.closest('.quiz-option');
                if (!option) return;
                option.classList.remove('disabled', 'correct', 'incorrect');
                input.disabled = false;
                input.checked = false;
                const indicator = option.querySelector('.option-indicator');
                if (indicator) {
                    indicator.textContent = '';
                    indicator.style.display = 'none';
                }
            });
            rtExerciseFeedback.style.display = 'none';
            rtExerciseStatus.textContent = 'Not Started';
            rtExerciseStatus.classList.remove('completed', 'failed');
            rtExerciseScore.style.display = 'none';
            submitRtExerciseBtn.style.display = 'inline-block';
            retryRtExerciseBtn.style.display = 'none';
            rtExerciseData.startTime = new Date();
            rtExerciseForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    document.querySelectorAll('input[name="rtExerciseAnswer"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (!rtExerciseData.startTime) {
                rtExerciseData.startTime = new Date();
                rtExerciseStatus.textContent = 'In Progress';
            }
        });
    });


    // Troubleshooting Quiz 1 Functionality
    const troubleshootingQuiz1Form = document.getElementById('troubleshootingQuiz1Form');
    const troubleshootingQuiz1Feedback = document.getElementById('troubleshootingQuiz1Feedback');
    const troubleshootingQuiz1Status = document.getElementById('troubleshootingQuiz1Status');
    const troubleshootingQuiz1Score = document.getElementById('troubleshootingQuiz1Score');
    const submitTroubleshootingQuiz1Btn = document.getElementById('submitTroubleshootingQuiz1');
    const retryTroubleshootingQuiz1Btn = document.getElementById('retryTroubleshootingQuiz1');

    let troubleshootingQuiz1Data = {
        attempts: 0,
        completed: false,
        score: 0,
        correctAnswer: 'a', // Insufficient polymerase or dNTPs
        maxPoints: 30,
        startTime: null,
        endTime: null
    };

    if (troubleshootingQuiz1Form) {
        troubleshootingQuiz1Form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Check if quiz is already completed
            if (troubleshootingQuiz1Data.completed) {
                return;
            }

            const selectedAnswer = document.querySelector('input[name="troubleshootingQuiz1Answer"]:checked');
            if (!selectedAnswer) {
                alert('Please select an answer before submitting.');
                return;
            }
            
            troubleshootingQuiz1Data.attempts++;
            troubleshootingQuiz1Data.endTime = new Date();
            
            const userAnswer = selectedAnswer.value;
            const isCorrect = userAnswer === troubleshootingQuiz1Data.correctAnswer;
            
            const troubleshootingQuiz1Options = document.querySelectorAll('#troubleshootingQuiz1Form .quiz-option');
            troubleshootingQuiz1Options.forEach(option => {
                option.classList.add('disabled');
                const input = option.querySelector('input');
                if (input) {
                    input.disabled = true;
                
                    const indicator = option.querySelector('.option-indicator');
                    if (indicator) {
                        if (input.value === troubleshootingQuiz1Data.correctAnswer) {
                            option.classList.add('correct');
                            indicator.textContent = '✓';
                            indicator.style.display = 'flex';
                        } else if (input.checked && input.value !== troubleshootingQuiz1Data.correctAnswer) {
                            option.classList.add('incorrect');
                            indicator.textContent = '✗';
                            indicator.style.display = 'flex';
                        }
                    }
                }
            });
            
            troubleshootingQuiz1Feedback.style.display = 'block';
            const feedbackIcon = troubleshootingQuiz1Feedback.querySelector('.feedback-icon');
            const feedbackTitle = troubleshootingQuiz1Feedback.querySelector('.feedback-title');
            
            if (isCorrect) {
                feedbackIcon.classList.add('correct');
                feedbackIcon.textContent = '✓';
                feedbackTitle.textContent = 'Correct!';
                troubleshootingQuiz1Status.textContent = 'Completed';
                troubleshootingQuiz1Status.classList.remove('failed');
                troubleshootingQuiz1Status.classList.add('completed');
                troubleshootingQuiz1Data.score = troubleshootingQuiz1Data.maxPoints;
                troubleshootingQuiz1Data.completed = true;
                addToScore(troubleshootingQuiz1Data.maxPoints);
                troubleshootingQuiz1Score.style.display = 'block';
                troubleshootingQuiz1Score.querySelector('.score-value').textContent = troubleshootingQuiz1Data.maxPoints + ' points';
            } else {
                feedbackIcon.classList.add('incorrect');
                feedbackIcon.textContent = '✗';
                feedbackTitle.textContent = 'Incorrect. The correct answer is highlighted above.';
                troubleshootingQuiz1Status.textContent = 'Failed';
                troubleshootingQuiz1Status.classList.remove('completed');
                troubleshootingQuiz1Status.classList.add('failed');
                troubleshootingQuiz1Data.score = 0;
                troubleshootingQuiz1Score.style.display = 'block';
                troubleshootingQuiz1Score.querySelector('.score-value').textContent = '0 points';
                retryTroubleshootingQuiz1Btn.style.display = 'inline-block';
            }
            
            submitTroubleshootingQuiz1Btn.style.display = 'none';
            reportToLMS('troubleshootingQuiz1', troubleshootingQuiz1Data.score, troubleshootingQuiz1Data.completed);
            troubleshootingQuiz1Feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
    
    if (retryTroubleshootingQuiz1Btn) {
        retryTroubleshootingQuiz1Btn.addEventListener('click', function() {
            const troubleshootingQuiz1Options = document.querySelectorAll('#troubleshootingQuiz1Form .quiz-option');
            troubleshootingQuiz1Options.forEach(option => {
                option.classList.remove('disabled', 'correct', 'incorrect');
                const input = option.querySelector('input');
                input.disabled = false;
                input.checked = false;
                const indicator = option.querySelector('.option-indicator');
                indicator.textContent = '';
                indicator.style.display = 'none';
            });
            
            troubleshootingQuiz1Feedback.style.display = 'none';
            troubleshootingQuiz1Status.textContent = 'Not Started';
            troubleshootingQuiz1Status.classList.remove('completed', 'failed');
            troubleshootingQuiz1Score.style.display = 'none';
            submitTroubleshootingQuiz1Btn.style.display = 'inline-block';
            retryTroubleshootingQuiz1Btn.style.display = 'none';
            troubleshootingQuiz1Data.startTime = new Date();
            troubleshootingQuiz1Form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    document.querySelectorAll('input[name="troubleshootingQuiz1Answer"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (!troubleshootingQuiz1Data.startTime) {
                troubleshootingQuiz1Data.startTime = new Date();
                troubleshootingQuiz1Status.textContent = 'In Progress';
            }
        });
    });

// Troubleshooting Quiz 2 Functionality (Corrected Scoring Logic)
const troubleshootingQuiz2Form = document.getElementById('troubleshootingQuiz2Form');
const troubleshootingQuiz2Feedback = document.getElementById('troubleshootingQuiz2Feedback');
const troubleshootingQuiz2Status = document.getElementById('troubleshootingQuiz2Status');
const troubleshootingQuiz2Score = document.getElementById('troubleshootingQuiz2Score');
const submitTroubleshootingQuiz2Btn = document.getElementById('submitTroubleshootingQuiz2');

let troubleshootingQuiz2Data = {
    attempts: 0,
    completed: false,
    score: 0,
    correctAnswers: ['a', 'e'], // Correct answers: air bubble and improper sealing
    maxPointsPerAnswer: 30, // 30 points per correct answer
    startTime: null,
    endTime: null
};

if (troubleshootingQuiz2Form) {
    troubleshootingQuiz2Form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Check if quiz is already completed
        if (troubleshootingQuiz2Data.completed) {
            return;
        }

        const selectedAnswers = Array.from(document.querySelectorAll('input[name="troubleshootingQuiz2Answer"]:checked')).map(input => input.value);
        if (selectedAnswers.length === 0) {
            alert('Please select at least one answer before submitting.');
            return;
        }
        
        troubleshootingQuiz2Data.attempts++;
        troubleshootingQuiz2Data.endTime = new Date();
        
        // Calculate score - only award points for completely correct answers (both correct, no incorrect)
        const correctAnswersSelected = selectedAnswers.filter(answer => 
            troubleshootingQuiz2Data.correctAnswers.includes(answer)
        );
        
        const incorrectAnswersSelected = selectedAnswers.filter(answer => 
            !troubleshootingQuiz2Data.correctAnswers.includes(answer)
        );

        // Calculate score based on perfect selection (both correct answers and no incorrect ones)
        const score = (correctAnswersSelected.length === troubleshootingQuiz2Data.correctAnswers.length && 
                      incorrectAnswersSelected.length === 0) ? 60 : 
                     (correctAnswersSelected.length === 1 && incorrectAnswersSelected.length === 0) ? 30 : 0;

        troubleshootingQuiz2Data.score = score;
        troubleshootingQuiz2Data.completed = true;

        // Add score to total only if there are points to add
        if (score > 0) {
            addToScore(score);
        }
        
        const troubleshootingQuiz2Options = document.querySelectorAll('#troubleshootingQuiz2Form .quiz-option');
        troubleshootingQuiz2Options.forEach(option => {
            option.classList.add('disabled');
            const input = option.querySelector('input');
            input.disabled = true;
            
            const indicator = option.querySelector('.option-indicator');
            if (troubleshootingQuiz2Data.correctAnswers.includes(input.value)) {
                option.classList.add('correct');
                indicator.textContent = '✓';
                indicator.style.display = 'flex';
            } else if (input.checked && !troubleshootingQuiz2Data.correctAnswers.includes(input.value)) {
                option.classList.add('incorrect');
                indicator.textContent = '✗';
                indicator.style.display = 'flex';
            }
        });
        
        troubleshootingQuiz2Feedback.style.display = 'block';
        const feedbackIcon = troubleshootingQuiz2Feedback.querySelector('.feedback-icon');
        const feedbackTitle = troubleshootingQuiz2Feedback.querySelector('.feedback-title');
        
        // Show results based on score
        if (score === 60) {
            feedbackIcon.classList.add('correct');
            feedbackIcon.textContent = '✓';
            feedbackTitle.textContent = 'Perfect! You selected both correct answers (air bubble and improper sealing) and no incorrect ones!';
            troubleshootingQuiz2Status.textContent = 'Completed';
            troubleshootingQuiz2Status.classList.remove('failed');
            troubleshootingQuiz2Status.classList.add('completed');
        } else if (score === 30) {
            feedbackIcon.classList.add('partial');
            feedbackIcon.textContent = '•';
            feedbackTitle.textContent = 'Good start! You got one correct answer and no incorrect ones. Try again to find the other issue.';
            troubleshootingQuiz2Status.textContent = 'Partially Complete';
            troubleshootingQuiz2Status.classList.remove('failed', 'completed');
            troubleshootingQuiz2Status.classList.add('partial');
        } else if (score === 0) {
            feedbackIcon.classList.add('incorrect');
            feedbackIcon.textContent = '✗';
            feedbackTitle.textContent = 'Keep trying! Either you selected incorrect answers or missed both correct ones. Remember to think about sample handling issues.';
            troubleshootingQuiz2Status.textContent = 'Try Again';
            troubleshootingQuiz2Status.classList.remove('completed', 'partial');
            troubleshootingQuiz2Status.classList.add('failed');
        }
        
        troubleshootingQuiz2Status.textContent = 'Completed';
        troubleshootingQuiz2Status.classList.add('completed');
        troubleshootingQuiz2Score.style.display = 'block';
        troubleshootingQuiz2Score.querySelector('.score-value').textContent = `${score} points`;
        
        // No retry button - disable submit button
        submitTroubleshootingQuiz2Btn.style.display = 'none';
        
        reportToLMS('troubleshootingQuiz2', troubleshootingQuiz2Data.score, troubleshootingQuiz2Data.completed);
        troubleshootingQuiz2Feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

document.querySelectorAll('input[name="troubleshootingQuiz2Answer"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (!troubleshootingQuiz2Data.startTime) {
            troubleshootingQuiz2Data.startTime = new Date();
            troubleshootingQuiz2Status.textContent = 'In Progress';
        }
    });
});


    // Continue Button Logic
    const continueButtons = document.querySelectorAll('.continue-btn');
    continueButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const nextChapterTab = e.target.dataset.next;
            if (nextChapterTab) {
                navigateToChapter(nextChapterTab);
            }
        });
    });

    // Special continue button for PCR Principle section
    const continueBtn = document.getElementById('continueBtn');
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            navigateToChapter('realtime-pcr');
        });
    }

    // Navigation function
    function navigateToChapter(chapterTab) {
        chapterItems.forEach(chapter => chapter.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));
        
        const nextChapter = document.querySelector(`[data-tab="${chapterTab}"]`);
        const nextSection = document.getElementById(chapterTab);
        
        if (nextChapter && nextSection) {
            nextChapter.classList.add('active');
            nextSection.classList.add('active');
            
        // Scroll to top when changing chapters
        window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Multiplex PCR Interactive Exercise
    let multiplexScore = 0;
    const maxMultiplexScore = 120; // 12 questions × 10 points each
    const multiplexScoreDisplay = document.getElementById('multiplexScore');
    let answersChecked = false;

    // Initialize score display as hidden
    if (multiplexScoreDisplay) {
        multiplexScoreDisplay.textContent = `-- / ${maxMultiplexScore}`;
        multiplexScoreDisplay.style.backgroundColor = '#cccccc';
    }

    // Initialize multiplex exercise event listeners
    const interpretationDropdowns = document.querySelectorAll('.interpretation-dropdown');
    interpretationDropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', function() {
            // Only calculate score internally, don't display until checked
            calculateMultiplexScore();
            
            // Reset visual feedback if user changes answer after checking
            if (answersChecked) {
                const sampleNumber = this.getAttribute('data-sample');
                const resultIndicator = document.querySelector(`.result-indicator[data-sample="${sampleNumber}"]`);
                if (resultIndicator) {
                    resultIndicator.innerHTML = '';
                }
                this.style.borderColor = '#ddd';
                this.style.backgroundColor = 'white';
                answersChecked = false;
                
                // Hide score again when user changes answers after checking
                if (multiplexScoreDisplay) {
                    multiplexScoreDisplay.textContent = `-- / ${maxMultiplexScore}`;
                    multiplexScoreDisplay.style.backgroundColor = '#cccccc';
                }
            }
        });
    });

    function calculateMultiplexScore() {
        let correctAnswers = 0;
        interpretationDropdowns.forEach(dropdown => {
            const correctAnswer = dropdown.getAttribute('data-correct');
            const selectedAnswer = dropdown.value;
            if (selectedAnswer === correctAnswer) {
                correctAnswers++;
            }
        });
        
        multiplexScore = correctAnswers * 10;
        // Don't update display here - only calculate internally
    }

    function updateMultiplexScoreDisplay() {
        if (multiplexScoreDisplay) {
            multiplexScoreDisplay.textContent = `${multiplexScore} / ${maxMultiplexScore}`;
            
            // Update score color based on performance
            if (multiplexScore === maxMultiplexScore) {
                multiplexScoreDisplay.style.backgroundColor = 'var(--rh-green)';
            } else if (multiplexScore >= maxMultiplexScore * 0.7) {
                multiplexScoreDisplay.style.backgroundColor = 'var(--rh-orange)';
            } else {
                multiplexScoreDisplay.style.backgroundColor = '#dc3545';
            }
        }
    }

    // Check All Answers button
    const checkAllAnswersBtn = document.getElementById('checkAllAnswers');
    if (checkAllAnswersBtn) {
        checkAllAnswersBtn.addEventListener('click', function() {
            let allAnswered = true;
            
            // First check if all questions are answered
            interpretationDropdowns.forEach(dropdown => {
                if (dropdown.value === '') {
                    allAnswered = false;
                }
            });
            
            if (!allAnswered) {
                alert('Please complete all interpretations before checking answers.');
                return;
            }
            
            // Calculate final score
            calculateMultiplexScore();
            
            // Now show the score for the first time
            updateMultiplexScoreDisplay();
            
            // Show visual feedback for all answers
            interpretationDropdowns.forEach(dropdown => {
                const sampleNumber = dropdown.getAttribute('data-sample');
                const correctAnswer = dropdown.getAttribute('data-correct');
                const selectedAnswer = dropdown.value;
                const resultIndicator = document.querySelector(`.result-indicator[data-sample="${sampleNumber}"]`);
                
                if (selectedAnswer === correctAnswer) {
                    resultIndicator.innerHTML = '<span style="color: var(--rh-green); font-weight: bold; font-size: 18px;">✓</span>';
                    dropdown.style.borderColor = 'var(--rh-green)';
                    dropdown.style.backgroundColor = '#d4edda';
                } else {
                    resultIndicator.innerHTML = '<span style="color: #dc3545; font-weight: bold; font-size: 18px;">✗</span>';
                    dropdown.style.borderColor = '#dc3545';
                    dropdown.style.backgroundColor = '#f8d7da';
                }
            });
            
            answersChecked = true;
            
            // Show summary
            const correctCount = multiplexScore / 10;
            const percentage = Math.round((correctCount / 12) * 100);
            let message = `Exercise Complete!\n\nScore: ${multiplexScore}/${maxMultiplexScore} (${percentage}%)\nCorrect answers: ${correctCount}/12\n\n`;
            
            if (percentage === 100) {
                message += 'Excellent! Perfect score! 🎉';
            } else if (percentage >= 75) {
                message += 'Great job! You have a solid understanding of PCR result interpretation.';
            } else if (percentage >= 50) {
                message += 'Good work! Review the incorrect answers to improve your understanding.';
            } else {
                message += 'Keep practicing! Review the principles of PCR result interpretation.';
            }
            addToScore(multiplexScore)

            alert(message);
        
            // 🆕 ADD: SCORM tracking
            courseProgress.quizzesCompleted.multiplexExercise = true;
            if (window.scormAPI) {
                window.scormSetScore(percentage);
            }
            updateCourseProgress();
            // Report to LMS
            reportToLMS('multiplexExercise', multiplexScore, percentage >= 70);
        });
    }

    // Reset Exercise button
    const resetMultiplexBtn = document.getElementById('resetMultiplex');
    if (resetMultiplexBtn) {
        resetMultiplexBtn.addEventListener('click', function() {
            interpretationDropdowns.forEach(dropdown => {
                dropdown.value = '';
                dropdown.style.borderColor = '#ddd';
                dropdown.style.backgroundColor = 'white';
                const sampleNumber = dropdown.getAttribute('data-sample');
                const resultIndicator = document.querySelector(`.result-indicator[data-sample="${sampleNumber}"]`);
                if (resultIndicator) {
                    resultIndicator.innerHTML = '';
                }
            });
            
            multiplexScore = 0;
            answersChecked = false;
            if (multiplexScoreDisplay) {
                multiplexScoreDisplay.textContent = `-- / ${maxMultiplexScore}`;
                multiplexScoreDisplay.style.backgroundColor = '#cccccc';
            }
        });
    }

    // End Module Button Logic
    const endModuleBtn = document.getElementById('endModuleBtn');
    if (endModuleBtn) {
        endModuleBtn.addEventListener('click', () => {
            reportModuleCompletion();
            exitToLMS();
        });
    }

    function reportModuleCompletion() {
 // 🆕 ADD: Final SCORM completion
    if (window.scormAPI && window.scormAPI.isScormAvailable()) {
        window.scormSetComplete();
        window.scormSetScore(95); // Set final score
        const sessionTime = Math.floor((new Date() - courseProgress.startTime) / 1000);
        window.scormAPI.setSessionTime(sessionTime);
        console.log('✅ Final completion sent to SCORM');
    }
        const moduleData = {
            moduleId: 'module4_pcr',
            completion: 'completed',
            score: 100,
            timeCompleted: new Date().toISOString()
        };
        
        if (typeof window.API !== 'undefined') {
            window.API.LMSSetValue('cmi.core.lesson_status', 'completed');
            window.API.LMSSetValue('cmi.core.score.raw', '100');
            window.API.LMSSetValue('cmi.core.exit', 'normal');
            window.API.LMSCommit('');
        } else if (typeof window.API_1484_11 !== 'undefined') {
            window.API_1484_11.SetValue('cmi.completion_status', 'completed');
            window.API_1484_11.SetValue('cmi.score.raw', '100');
            window.API_1484_11.SetValue('cmi.exit', 'normal');
            window.API_1484_11.Commit('');
        } else {
            try {
                const existingData = JSON.parse(localStorage.getItem('pcr_course_data') || '[]');
                existingData.push(moduleData);
                localStorage.setItem('pcr_course_data', JSON.stringify(existingData));
            } catch (e) {
                console.log('LMS data storage not available');
            }
        }
    }

    function exitToLMS() {
        const completionMessage = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                        background: rgba(0,0,0,0.8); display: flex; align-items: center; 
                        justify-content: center; z-index: 10000;">
                <div style="background: white; padding: 40px; border-radius: 20px; text-align: center; 
                            max-width: 500px; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
                    <h2 style="color: #39870c; margin-bottom: 20px;">🎉 Module Completed!</h2>
                    <p style="font-size: 18px; margin-bottom: 30px;">
                        Congratulations! You have successfully completed Module 4: Principles of Real-time PCR.
                    </p>
                    <p style="font-size: 14px; color: #666;">
                        You will be redirected to the main course page in 3 seconds...
                    </p>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', completionMessage);
        
        setTimeout(() => {
            if (typeof window.API !== 'undefined') {
                window.API.LMSFinish('');
                window.close();
            } else if (typeof window.API_1484_11 !== 'undefined') {
                window.API_1484_11.Terminate('');
                window.close();
            } else if (window.parent !== window) {
                window.parent.postMessage({
                    type: 'moduleComplete',
                    moduleId: 'module4_pcr',
                    status: 'completed'
                }, '*');
            } else {
                window.location.href = '../course.html';
            }
        }, 3000);
    }


    // Troubleshooting Dashboard Functionality
    const troubleshootTiles = document.querySelectorAll('.troubleshoot-tile');
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    const modalOverlays = document.querySelectorAll('.modal-overlay');

    console.log('Loading troubleshooting dashboard...');

    // Function to show modal
    function showModal(issueType) {
        const modal = document.getElementById(issueType + '-modal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            console.log('Opened modal for:', issueType);
            
            // Focus management for accessibility
            const closeButton = modal.querySelector('.modal-close');
            if (closeButton) {
                closeButton.focus();
            }
        }
    }

    // Function to hide all modals
    function hideAllModals() {
        modalOverlays.forEach(overlay => {
            overlay.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    }

    // Add click handlers to tiles
    troubleshootTiles.forEach(tile => {
        tile.addEventListener('click', function() {
            const issueType = this.getAttribute('data-issue');
            showModal(issueType);
            
            // Analytics tracking if LMS integration exists
            if (typeof reportToLMS === 'function') {
                reportToLMS(`troubleshooting_${issueType}_viewed`, 0, false);
            }
        });

        // Add keyboard support for accessibility
        tile.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const issueType = this.getAttribute('data-issue');
                showModal(issueType);
            }
        });

        // Make tiles focusable and add ARIA attributes
        tile.setAttribute('tabindex', '0');
        tile.setAttribute('role', 'button');
        const titleElement = tile.querySelector('h4');
        if (titleElement) {
            tile.setAttribute('aria-label', `View details for ${titleElement.textContent}`);
        }
    });

    // Add close handlers to close buttons
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            hideAllModals();
        });
    });

    // Close modal when clicking on overlay background
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                hideAllModals();
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal-overlay[style*="flex"]');
            if (openModal) {
                hideAllModals();
            }
        }
    });

    // Handle image loading errors with fallback
    const troubleshootingImages = document.querySelectorAll('.troubleshoot-tile img, .modal-overlay img');
    troubleshootingImages.forEach(img => {
        img.addEventListener('error', function() {
            console.log('Image failed to load:', this.src);
            // Try fallback image
            if (!this.src.includes('pcr-curves-normal.png')) {
                this.src = 'images/pcr-curves-normal.png';
            } else {
                // If even fallback fails, show placeholder
                this.style.display = 'none';
                const container = this.closest('.tile-img-container, .modal-image');
                if (container) {
                    container.style.background = 'linear-gradient(45deg, #8fcae7, #76d2b6)';
                    if (!container.querySelector('.image-placeholder')) {
                        const placeholder = document.createElement('div');
                        placeholder.className = 'image-placeholder';
                        placeholder.style.cssText = `
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            height: 100%; 
                            color: #01689b; 
                            font-weight: 600;
                            text-align: center;
                            padding: 20px;
                        `;
                        placeholder.textContent = 'Image not available';
                        container.appendChild(placeholder);
                    }
                }
            }
        });
    });

    // Troubleshooting Analytics and Tracking
    function trackTroubleshootingInteraction(action, issueType) {
        const interactionData = {
            action: action,
            issueType: issueType,
            timestamp: new Date().toISOString(),
            module: 'troubleshooting_dashboard'
        };

        // Report to LMS if available
        if (typeof reportToLMS === 'function') {
            reportToLMS(`troubleshooting_${action}`, 0, false);
        }

        // Store locally for offline tracking
        try {
            const existingData = JSON.parse(localStorage.getItem('troubleshooting_interactions') || '[]');
            existingData.push(interactionData);
            // Keep only last 100 interactions to prevent storage bloat
            if (existingData.length > 100) {
                existingData.splice(0, existingData.length - 100);
            }
            localStorage.setItem('troubleshooting_interactions', JSON.stringify(existingData));
            console.log('Tracked interaction:', action, issueType);
        } catch (e) {
            console.log('Could not store troubleshooting interaction data:', e);
        }
    }

    // Enhanced analytics on tile clicks
    troubleshootTiles.forEach(tile => {
        tile.addEventListener('click', function() {
            const issueType = this.getAttribute('data-issue');
            trackTroubleshootingInteraction('tile_clicked', issueType);
        });
    });

    // Track when troubleshooting section becomes visible
    const troubleshootingSection = document.getElementById('troubleshooting');
    if (troubleshootingSection && typeof IntersectionObserver !== 'undefined') {
        const troubleshootingObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    trackTroubleshootingInteraction('section_viewed', 'dashboard');
                    troubleshootingObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        troubleshootingObserver.observe(troubleshootingSection);
    }

    // Preload images for better user experience
    function preloadTroubleshootingImages() {
        const imageUrls = [
            'images/pcr-curves-contamination.png',
            'images/pcr-curves-degradation.png',
            'images/pcr-curves-high-template.png',
            'images/pcr-curves-inhibition.png',
            'images/pcr-curves-low-template.png',
            'images/pcr-curves-primer-dimer.png',
            'images/pcr-curves-normal.png'
        ];

        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
            img.onload = () => console.log('Preloaded:', url);
            img.onerror = () => console.log('Failed to preload:', url);
        });
    }

    // Initialize troubleshooting dashboard
    function initializeTroubleshootingDashboard() {
        console.log('Troubleshooting Dashboard initialized with', troubleshootTiles.length, 'tiles');
        
        // Preload images
        preloadTroubleshootingImages();
        
        // Add loading indicator if needed
        const dashboard = document.querySelector('.troubleshoot-main-container');
        if (dashboard) {
            dashboard.style.opacity = '0';
            setTimeout(() => {
                dashboard.style.transition = 'opacity 0.5s ease';
                dashboard.style.opacity = '1';
            }, 100);
        }
        
        // Verify all required elements exist
        if (troubleshootTiles.length === 0) {
            console.warn('No troubleshooting tiles found! Check HTML structure.');
        }
        if (modalOverlays.length === 0) {
            console.warn('No modal overlays found! Check HTML structure.');
        }
    }

// Fun Thermometer Score Tracking
let courseScore = 0;
const maxScore = 540;

const statusMessages = [
    { threshold: 0, message: "🌱 Just getting started!", color: "#ff6b6b" },
    { threshold: 10, message: "🚀 Off to a great start!", color: "#ff8a65" },
    { threshold: 25, message: "⭐ Making progress!", color: "#ffa726" },
    { threshold: 40, message: "🔥 You're on fire!", color: "#66bb6a" },
    { threshold: 60, message: "💪 Awesome work!", color: "#42a5f5" },
    { threshold: 80, message: "🏆 Almost there!", color: "#ab47bc" },
    { threshold: 95, message: "🎉 Perfect score!", color: "#9c27b0" }
];

function updateThermometer() {
    const percentage = Math.round((courseScore / maxScore) * 100);
    
    // Update displays
    document.querySelector('.current-score').textContent = courseScore;
    document.getElementById('percentageDisplay').textContent = percentage + '%';
    
    // Update mercury fill
    const mercuryFill = document.getElementById('mercuryFill');
    const mercuryBulb = document.getElementById('mercuryBulb');
    
    mercuryFill.style.height = percentage + '%';
    
    // Update status message and colors
    let currentStatus = statusMessages[0];
    for (let status of statusMessages) {
        if (percentage >= status.threshold) {
            currentStatus = status;
        }
    }
    
    document.getElementById('statusMessage').textContent = currentStatus.message;
    mercuryBulb.style.backgroundColor = currentStatus.color;
    
    // Add bubble animation for scores above 50%
    if (percentage > 50) {
        mercuryBulb.classList.add('active');
    } else {
        mercuryBulb.classList.remove('active');
    }
    
    // Save score
    localStorage.setItem('courseScore', courseScore.toString());
}

function addToScore(points) {
    courseScore = Math.min(courseScore + points, maxScore); // Cap at max score
    updateThermometer();
    
    // Fun notification for score increases
    if (points > 0) {
        showScoreNotification(points);
    }
}

function showScoreNotification(points) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--rh-green) 0%, var(--rh-orange) 100%);
        color: white;
        padding: 10px 20px;
        border-radius: 25px;
        font-weight: bold;
        z-index: 10000;
        animation: slideIn 0.5s ease, slideOut 0.5s ease 2s forwards;
    `;
    notification.textContent = `+${points} points! 🎉`;
    
    // Add animation keyframes if not already added
    if (!document.getElementById('score-animations')) {
        const style = document.createElement('style');
        style.id = 'score-animations';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Load saved score
function loadSavedScore() {
    const saved = localStorage.getItem('courseScore');
    if (saved) {
        courseScore = parseInt(saved) || 0;
    }
    updateThermometer();
}

// Initialize thermometer
loadSavedScore();

    // Call initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeTroubleshootingDashboard);
    } else {
        initializeTroubleshootingDashboard();
    }

// 🆕 ADD: Progress calculation function
function updateCourseProgress() {
    if (!window.scormAPI || !window.scormAPI.isScormAvailable()) return;
    
    let progress = 0;
    
    // Chapter visits (40% of progress)
    progress += (courseProgress.chaptersVisited.size / courseProgress.totalChapters) * 0.4;
    
    // Quiz completion (60% of progress)
    const completedQuizzes = Object.values(courseProgress.quizzesCompleted).filter(Boolean).length;
    progress += (completedQuizzes / 3) * 0.6;
    
    // Update SCORM progress
    window.scormSetProgress(progress);
    
    // Mark complete if all quizzes done and most chapters visited
    if (completedQuizzes >= 2 && courseProgress.chaptersVisited.size >= 4) {
        window.scormSetComplete();
        console.log('🎉 Course marked complete!');
    }
    
    console.log(`📊 Progress: ${Math.round(progress * 100)}%`);
}



    // Export functions for potential external use
    window.troubleshootingDashboard = {
        showModal: showModal,
        hideAllModals: hideAllModals,
        trackInteraction: trackTroubleshootingInteraction
    };

    console.log('Troubleshooting Dashboard JavaScript loaded successfully');

    // Console log to confirm script loaded
    console.log('PCR Module JavaScript loaded successfully');

    
    // 🆕 ADD: Save progress every 30 seconds
    setInterval(() => {
        if (window.scormAPI && window.scormAPI.isScormAvailable()) {
            const sessionTime = Math.floor((new Date() - courseProgress.startTime) / 1000);
            window.scormAPI.setSessionTime(sessionTime);
            window.scormAPI.commit();
        }
    }, 30000);

    console.log('PCR Module JavaScript loaded successfully');
}); // End of DOMContentLoaded


