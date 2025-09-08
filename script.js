document.addEventListener('DOMContentLoaded', () => {
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
            
            quizData.quiz1.attempts++;
            quizData.quiz1.endTime = new Date();
            
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
                option.classList.remove('disabled', 'correct', 'incorrect');
                const input = option.querySelector('input');
                input.disabled = false;
                input.checked = false;
                const indicator = option.querySelector('.option-indicator');
                indicator.textContent = '';
                indicator.style.display = 'none';
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
            
            const contentArea = document.querySelector('.content-area');
            contentArea.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Multiplex PCR Interactive Exercise
    let multiplexScore = 0;
    const maxMultiplexScore = 120; // 12 questions × 10 points each
    const multiplexScoreDisplay = document.getElementById('multiplexScore');

    // Initialize multiplex exercise event listeners
    const interpretationDropdowns = document.querySelectorAll('.interpretation-dropdown');
    interpretationDropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', function() {
            const sampleNumber = this.getAttribute('data-sample');
            const correctAnswer = this.getAttribute('data-correct');
            const selectedAnswer = this.value;
            const resultIndicator = document.querySelector(`.result-indicator[data-sample="${sampleNumber}"]`);
            
            if (selectedAnswer === correctAnswer) {
                resultIndicator.innerHTML = '<span style="color: var(--rh-green); font-weight: bold; font-size: 18px;">✓</span>';
                this.style.borderColor = 'var(--rh-green)';
                this.style.backgroundColor = '#d4edda';
            } else if (selectedAnswer !== '') {
                resultIndicator.innerHTML = '<span style="color: #dc3545; font-weight: bold; font-size: 18px;">✗</span>';
                this.style.borderColor = '#dc3545';
                this.style.backgroundColor = '#f8d7da';
            } else {
                resultIndicator.innerHTML = '';
                this.style.borderColor = '#ddd';
                this.style.backgroundColor = 'white';
            }
            
            updateMultiplexScore();
        });
    });

    function updateMultiplexScore() {
        let correctAnswers = 0;
        interpretationDropdowns.forEach(dropdown => {
            const correctAnswer = dropdown.getAttribute('data-correct');
            const selectedAnswer = dropdown.value;
            if (selectedAnswer === correctAnswer) {
                correctAnswers++;
            }
        });
        
        multiplexScore = correctAnswers * 10;
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
            interpretationDropdowns.forEach(dropdown => {
                if (dropdown.value === '') {
                    allAnswered = false;
                    dropdown.style.borderColor = '#dc3545';
                    dropdown.style.backgroundColor = '#f8d7da';
                }
            });
            
            if (!allAnswered) {
                alert('Please complete all interpretations before checking answers.');
                return;
            }
            
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
            
            alert(message);
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
            if (multiplexScoreDisplay) {
                multiplexScoreDisplay.textContent = `0 / ${maxMultiplexScore}`;
                multiplexScoreDisplay.style.backgroundColor = 'var(--rh-green)';
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

    // Console log to confirm script loaded
    console.log('PCR Module JavaScript loaded successfully');
});