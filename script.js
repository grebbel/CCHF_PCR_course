document.addEventListener('DOMContentLoaded', () => {
    // Scroll-to-Top Functionality
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    function scrollToContentTop() {
        const contentArea = document.querySelector('.content-area');
        if (contentArea) {
            contentArea.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        // Also scroll the main window to top
        scrollToTop();
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
            
            // Add scroll to top after chapter navigation
            setTimeout(() => {
                scrollToTop();
            }, 100);
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
            
            const allRtOptions = document.querySelectorAll('input[name="rtExerciseAnswer"]').forEach(input => {
                const option = input.closest('.quiz-option');
                option.classList.add('disabled');
                input.disabled = true;
                
                const indicator = option.querySelector('.option-indicator');
                if (input.value === rtExerciseData.correctAnswer) {
                    option.classList.add('correct');
                    indicator.textContent = '✓';
                } else if (input.checked && input.value !== rtExerciseData.correctAnswer) {
                    option.classList.add('incorrect');
                    indicator.textContent = '✗';
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
            const allRtOptions = document.querySelectorAll('input[name="rtExerciseAnswer"]').forEach(input => {
                const option = input.closest('.quiz-option');
                option.classList.remove('disabled', 'correct', 'incorrect');
                input.disabled = false;
                input.checked = false;
                const indicator = option.querySelector('.option-indicator');
                indicator.textContent = '';
                indicator.style.display = 'none';
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

    // Updated Navigation function with scroll-to-top
    function navigateToChapter(chapterTab) {
        chapterItems.forEach(chapter => chapter.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));
        
        const nextChapter = document.querySelector(`[data-tab="${chapterTab}"]`);
        const nextSection = document.getElementById(chapterTab);
        
        if (nextChapter && nextSection) {
            nextChapter.classList.add('active');
            nextSection.classList.add('active');
            
            // Enhanced scroll to top functionality
            setTimeout(() => {
                scrollToTop();
            }, 100);
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
            
            alert(message);
            
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

    // Global click handler for dynamically created buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('continue-btn')) {
            setTimeout(() => {
                scrollToTop();
            }, 100);
        }
    });

    // Console log to confirm script loaded
    console.log('PCR Module JavaScript loaded successfully');
});