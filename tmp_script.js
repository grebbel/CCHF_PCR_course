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

    // Troubleshooting Simulator Data and Functions
    const troubleshootingData = {
        'no-amplification': {
            title: 'No Amplification',
            description: 'The positive control shows no amplification signal, indicating a complete PCR failure.',
            visual: 'negative',
            questions: [
                { q: 'Are all reagents within expiration date?', type: 'yes-no' },
                { q: 'Was the thermal cycler working properly?', type: 'yes-no' },
                { q: 'Did you include all necessary components?', type: 'yes-no' }
            ],
            steps: [
                {
                    title: 'Check Reagent Quality',
                    description: 'First, we need to verify that all PCR reagents are functional.',
                    visual: 'reagent-check',
                    choices: [
                        { id: 'check-expiry', title: 'Check expiration dates', desc: 'Verify all reagents are not expired' },
                        { id: 'check-storage', title: 'Verify storage conditions', desc: 'Ensure proper temperature storage' },
                        { id: 'fresh-reagents', title: 'Prepare fresh reagents', desc: 'Make new master mix from fresh stocks' }
                    ]
                },
                {
                    title: 'Verify PCR Setup',
                    description: 'Check if all essential components were included in the reaction.',
                    visual: 'pcr-components',
                    choices: [
                        { id: 'check-polymerase', title: 'Verify polymerase addition', desc: 'Confirm Taq polymerase was added' },
                        { id: 'check-primers', title: 'Check primer concentrations', desc: 'Verify proper primer amounts' },
                        { id: 'check-template', title: 'Confirm template addition', desc: 'Ensure DNA/RNA template was added' }
                    ]
                },
                {
                    title: 'Equipment Verification',
                    description: 'Ensure the thermal cycler is functioning correctly.',
                    visual: 'thermal-cycler',
                    choices: [
                        { id: 'check-temperatures', title: 'Verify temperatures', desc: 'Use thermometer to check actual temperatures' },
                        { id: 'check-timing', title: 'Check cycle timing', desc: 'Verify program parameters are correct' },
                        { id: 'different-cycler', title: 'Try different cycler', desc: 'Test on another machine if available' }
                    ]
                }
            ],
            resolution: {
                title: 'PCR Amplification Restored',
                description: 'By systematically checking reagents, setup, and equipment, we identified and resolved the amplification failure.',
                prevention: [
                    'Always check reagent expiration dates before use',
                    'Maintain proper cold chain during reagent storage',
                    'Include positive controls in every run',
                    'Regularly calibrate thermal cycler temperatures'
                ]
            }
        },
        'high-ct': {
            title: 'High Ct Values',
            description: 'Samples are showing delayed or weak amplification with Ct values higher than expected.',
            visual: 'delayed-curves',
            questions: [
                { q: 'Are the high Ct values consistent across replicates?', type: 'yes-no' },
                { q: 'Is this affecting all samples or just some?', type: 'multiple' },
                { q: 'Has the template been stored properly?', type: 'yes-no' }
            ],
            steps: [
                {
                    title: 'Assess Template Quality',
                    description: 'Poor template quality is the most common cause of high Ct values.',
                    visual: 'template-quality',
                    choices: [
                        { id: 'check-concentration', title: 'Measure template concentration', desc: 'Use spectrophotometer or fluorometer' },
                        { id: 'check-purity', title: 'Assess template purity', desc: 'Check A260/A280 and A260/A230 ratios' },
                        { id: 'fresh-extraction', title: 'Perform fresh extraction', desc: 'Extract nucleic acids from original sample' }
                    ]
                },
                {
                    title: 'Optimize PCR Conditions',
                    description: 'Adjust reaction conditions to improve amplification efficiency.',
                    visual: 'optimization',
                    choices: [
                        { id: 'increase-cycles', title: 'Increase cycle number', desc: 'Add 5-10 more cycles to the program' },
                        { id: 'optimize-primers', title: 'Optimize primer concentration', desc: 'Test different primer concentrations' },
                        { id: 'adjust-annealing', title: 'Adjust annealing temperature', desc: 'Lower temperature by 2-5°C' }
                    ]
                }
            ],
            resolution: {
                title: 'Amplification Efficiency Improved',
                description: 'Template quality optimization and reaction condition adjustments have restored normal Ct values.',
                prevention: [
                    'Store nucleic acids at -80°C for long-term storage',
                    'Avoid repeated freeze-thaw cycles',
                    'Use high-quality extraction methods',
                    'Include template quality controls'
                ]
            }
        },
        'inhibition': {
            title: 'PCR Inhibition',
            description: 'Internal control fails to amplify, suggesting the presence of PCR inhibitors in the sample.',
            visual: 'inhibition-curves',
            questions: [
                { q: 'Is inhibition affecting all samples from the same source?', type: 'yes-no' },
                { q: 'What type of sample are you working with?', type: 'multiple' },
                { q: 'Have you tried diluting the template?', type: 'yes-no' }
            ],
            steps: [
                {
                    title: 'Test Template Dilution',
                    description: 'Diluting the template can reduce inhibitor concentration while maintaining target detectability.',
                    visual: 'dilution-series',
                    choices: [
                        { id: 'serial-dilution', title: 'Perform serial dilutions', desc: 'Test 1:10, 1:100, 1:1000 dilutions' },
                        { id: 'compare-undiluted', title: 'Compare with undiluted', desc: 'Run diluted and undiluted side by side' },
                        { id: 'optimize-dilution', title: 'Find optimal dilution', desc: 'Identify best dilution factor' }
                    ]
                },
                {
                    title: 'Improve Sample Cleanup',
                    description: 'Enhanced purification can remove inhibitory substances.',
                    visual: 'cleanup-methods',
                    choices: [
                        { id: 'additional-wash', title: 'Additional wash steps', desc: 'Add extra wash steps to extraction' },
                        { id: 'different-kit', title: 'Try different extraction kit', desc: 'Use alternative purification method' },
                        { id: 'bsa-addition', title: 'Add BSA to reaction', desc: 'Include BSA to neutralize inhibitors' }
                    ]
                }
            ],
            resolution: {
                title: 'Inhibition Successfully Removed',
                description: 'Template dilution and improved purification have eliminated PCR inhibitors.',
                prevention: [
                    'Optimize extraction protocols for sample type',
                    'Include inhibition controls in routine testing',
                    'Consider sample dilution for difficult matrices',
                    'Use high-quality extraction kits'
                ]
            }
        },
        'contamination': {
            title: 'Contamination Detected',
            description: 'The negative control shows amplification signal, indicating contamination in the PCR setup.',
            visual: 'contamination-curves',
            questions: [
                { q: 'Is contamination in negative control only?', type: 'yes-no' },
                { q: 'When did you last clean the workspace?', type: 'multiple' },
                { q: 'Are you using separate areas for pre and post-PCR?', type: 'yes-no' }
            ],
            steps: [
                {
                    title: 'Immediate Containment',
                    description: 'Stop all work and contain the contamination to prevent spread.',
                    visual: 'containment',
                    choices: [
                        { id: 'stop-work', title: 'Stop all PCR work', desc: 'Immediately cease all amplification work' },
                        { id: 'isolate-area', title: 'Isolate work area', desc: 'Quarantine contaminated workspace' },
                        { id: 'document-samples', title: 'Document affected samples', desc: 'Record all potentially contaminated samples' }
                    ]
                },
                {
                    title: 'Decontamination Protocol',
                    description: 'Thoroughly clean and decontaminate all surfaces and equipment.',
                    visual: 'decontamination',
                    choices: [
                        { id: 'bleach-surfaces', title: 'Clean with bleach solution', desc: 'Use 10% bleach for all surfaces' },
                        { id: 'uv-treatment', title: 'UV irradiation', desc: 'Treat work area with UV light' },
                        { id: 'new-reagents', title: 'Prepare fresh reagents', desc: 'Make new master mix and controls' }
                    ]
                },
                {
                    title: 'Source Investigation',
                    description: 'Identify the source of contamination to prevent recurrence.',
                    visual: 'investigation',
                    choices: [
                        { id: 'check-reagents', title: 'Test individual reagents', desc: 'Check each reagent separately' },
                        { id: 'review-procedure', title: 'Review procedures', desc: 'Examine workflow for contamination points' },
                        { id: 'equipment-check', title: 'Inspect equipment', desc: 'Check pipettes and other equipment' }
                    ]
                }
            ],
            resolution: {
                title: 'Contamination Eliminated',
                description: 'Systematic decontamination and source identification have resolved the contamination issue.',
                prevention: [
                    'Maintain separate pre-PCR and post-PCR areas',
                    'Use aerosol-resistant pipette tips',
                    'Regular workspace decontamination',
                    'Proper sample handling procedures',
                    'Include multiple negative controls'
                ]
            }
        },
        'inconsistent': {
            title: 'Inconsistent Results',
            description: 'Replicates show high variability in Ct values, indicating poor precision.',
            visual: 'variable-curves',
            questions: [
                { q: 'Is variability >0.5 Ct between replicates?', type: 'yes-no' },
                { q: 'Are you seeing bubbles in the reactions?', type: 'yes-no' },
                { q: 'Have you checked pipette calibration recently?', type: 'yes-no' }
            ],
            steps: [
                {
                    title: 'Check Pipetting Technique',
                    description: 'Poor pipetting is the most common cause of variability.',
                    visual: 'pipetting',
                    choices: [
                        { id: 'calibrate-pipettes', title: 'Calibrate pipettes', desc: 'Check and calibrate all pipettes' },
                        { id: 'technique-review', title: 'Review technique', desc: 'Ensure proper pipetting form' },
                        { id: 'different-tips', title: 'Try different tips', desc: 'Use high-quality pipette tips' }
                    ]
                },
                {
                    title: 'Improve Mixing',
                    description: 'Ensure thorough and consistent mixing of all components.',
                    visual: 'mixing',
                    choices: [
                        { id: 'vortex-longer', title: 'Increase mixing time', desc: 'Vortex reactions longer' },
                        { id: 'mix-gently', title: 'Gentle mixing technique', desc: 'Use gentle inversion mixing' },
                        { id: 'larger-master-mix', title: 'Larger master mix volume', desc: 'Prepare larger volumes for better mixing' }
                    ]
                }
            ],
            resolution: {
                title: 'Precision Improved',
                description: 'Improved pipetting technique and mixing protocols have reduced variability.',
                prevention: [
                    'Regular pipette calibration and maintenance',
                    'Consistent pipetting technique training',
                    'Use of positive displacement pipettes for viscous samples',
                    'Adequate mixing protocols'
                ]
            }
        },
        'nonspecific': {
            title: 'Non-specific Amplification',
            description: 'Melting curve analysis shows multiple peaks, indicating non-specific PCR products.',
            visual: 'multiple-peaks',
            questions: [
                { q: 'Are you seeing primer dimers?', type: 'yes-no' },
                { q: 'Is the annealing temperature optimized?', type: 'yes-no' },
                { q: 'Have you checked primer design?', type: 'yes-no' }
            ],
            steps: [
                {
                    title: 'Optimize Annealing Temperature',
                    description: 'Increase specificity by optimizing the annealing temperature.',
                    visual: 'temperature-gradient',
                    choices: [
                        { id: 'increase-temp', title: 'Increase annealing temperature', desc: 'Raise by 2-5°C for more specificity' },
                        { id: 'gradient-pcr', title: 'Perform gradient PCR', desc: 'Test range of temperatures' },
                        { id: 'touchdown-pcr', title: 'Use touchdown PCR', desc: 'Start high and decrease temperature' }
                    ]
                },
                {
                    title: 'Adjust Primer Concentrations',
                    description: 'Reduce primer dimer formation by optimizing concentrations.',
                    visual: 'primer-optimization',
                    choices: [
                        { id: 'reduce-primers', title: 'Reduce primer concentration', desc: 'Lower to 0.1-0.3 μM' },
                        { id: 'check-primer-dimers', title: 'Check for primer dimers', desc: 'Analyze primer interactions' },
                        { id: 'redesign-primers', title: 'Redesign primers', desc: 'Design new primers if necessary' }
                    ]
                }
            ],
            resolution: {
                title: 'Specificity Improved',
                description: 'Temperature and primer optimization have eliminated non-specific amplification.',
                prevention: [
                    'Careful primer design with specificity checks',
                    'Optimization of annealing temperatures',
                    'Use of hot-start polymerases',
                    'Regular melting curve analysis'
                ]
            }
        }
    };

    let currentProblem = null;
    let currentStep = 0;
    let selectedChoices = [];

    // Troubleshooting Helper Functions
    function generateFlatCurve() {
        const points = [];
        for (let i = 0; i < 40; i++) {
            points.push({
                x: 50 + (i * 10),
                y: 240 + Math.random() * 5 // Slight noise around baseline
            });
        }
        return points;
    }

    function generateNormalCurve(ctValue) {
        const points = [];
        for (let i = 0; i < 40; i++) {
            let y;
            if (i < ctValue - 5) {
                y = 240 + Math.random() * 5; // Baseline
            } else if (i < ctValue + 10) {
                // Exponential phase
                const progress = (i - (ctValue - 5)) / 15;
                y = 240 - (progress * 160) + Math.random() * 10;
            } else {
                // Plateau
                y = 80 + Math.random() * 20;
            }
            points.push({
                x: 50 + (i * 10),
                y: Math.max(60, Math.min(250, y))
            });
        }
        return points;
    }

    function generateDelayedCurve(ctValue) {
        return generateNormalCurve(ctValue);
    }

// Replace your drawProblemCurves function with this image-based version
function drawProblemCurves(svg, visualType) {
    // Clear the SVG content first
    svg.innerHTML = '';
    
    // Define image paths for different curve types
    const curveImages = {
        'normal': 'images/pcr-curves-normal.png',
        'inhibition': 'images/pcr-curves-inhibition.png', 
        'degradation': 'images/pcr-curves-degradation.png',
        'negative': 'images/pcr-curves-negative.png',
        'contamination': 'images/pcr-curves-contamination.png',
        'primer_dimer': 'images/pcr-curves-primer-dimer.png',
        'low_template': 'images/pcr-curves-low-template.png',
        'high_template': 'images/pcr-curves-high-template.png'
    };
    
    // Get the image path, fallback to normal if not found
    const imagePath = curveImages[visualType] || curveImages['normal'];
    
    // Create SVG image element
    const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    image.setAttribute('href', imagePath);
    image.setAttribute('x', '10');
    image.setAttribute('y', '20');
    image.setAttribute('width', '480');
    image.setAttribute('height', '260');
    image.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    
    // Add error handling
    image.addEventListener('error', function() {
        console.warn(`Could not load PCR curve image: ${imagePath}`);
        // Fallback to text if image fails
        addFallbackText(svg, visualType);
    });
    
    svg.appendChild(image);
}

// Fallback function if images don't load
function addFallbackText(svg, visualType) {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', '250');
    text.setAttribute('y', '150');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('font-family', 'Arial');
    text.setAttribute('font-size', '16');
    text.setAttribute('fill', '#666');
    text.textContent = `PCR Curves: ${visualType}`;
    svg.appendChild(text);
    
    const subtext = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    subtext.setAttribute('x', '250');
    subtext.setAttribute('y', '180');
    subtext.setAttribute('text-anchor', 'middle');
    subtext.setAttribute('font-family', 'Arial');
    subtext.setAttribute('font-size', '12');
    subtext.setAttribute('fill', '#999');
    subtext.textContent = 'Image not available';
    svg.appendChild(subtext);
}

// Alternative approach: Use regular HTML img element instead of SVG
function updateProblemVisualWithImages(visualType) {
    const container = document.getElementById('problem-visual');
    if (!container) return;

    // Define image paths
    const curveImages = {
        'normal': 'images/pcr-curves-normal.png',
        'inhibition': 'images/pcr-curves-inhibition.png',
        'degradation': 'images/pcr-curves-degradation.png',
        'negative': 'images/pcr-curves-negative.png',
        'contamination': 'images/pcr-curves-contamination.png',
        'primer_dimer': 'images/pcr-curves-primer-dimer.png',
        'low_template': 'images/pcr-curves-low-template.png',
        'high_template': 'images/pcr-curves-high-template.png'
    };

    const imagePath = curveImages[visualType] || curveImages['normal'];

    // Create HTML structure
    container.innerHTML = `
        <div class="pcr-curve-container" style="
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            background: white;
        ">
            <img 
                src="${imagePath}" 
                alt="PCR Curves: ${visualType}"
                style="
                    width: 100%;
                    height: auto;
                    display: block;
                "
                onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
            >
            <div style="
                display: none;
                padding: 40px;
                text-align: center;
                color: #666;
                background: #f9f9f9;
            ">
                <h3 style="margin: 0 0 10px 0;">PCR Curves: ${visualType}</h3>
                <p style="margin: 0; font-size: 14px;">Image not available</p>
            </div>
        </div>
    `;
}

// Enhanced version with loading states and descriptions
function updateProblemVisualEnhanced(visualType) {
    const container = document.getElementById('problem-visual');
    if (!container) return;

    // Curve descriptions for educational context
    const curveDescriptions = {
        'normal': 'Normal PCR amplification showing typical S-shaped curves with clear exponential phases.',
        'inhibition': 'PCR inhibition causing delayed amplification and reduced efficiency.',
        'degradation': 'Template degradation resulting in poor amplification and irregular curves.',
        'negative': 'Negative controls showing no amplification (flat lines).',
        'contamination': 'Contamination showing unexpected amplification in negative controls.',
        'primer_dimer': 'Primer-dimer formation causing low-level, early amplification artifacts.',
        'low_template': 'Low template concentration causing delayed Ct values.',
        'high_template': 'High template concentration causing early Ct values and potential inhibition.'
    };

    const curveImages = {
        'normal': 'images/pcr-curves-normal.png',
        'inhibition': 'images/pcr-curves-inhibition.png',
        'degradation': 'images/pcr-curves-degradation.png',
        'negative': 'images/pcr-curves-negative.png',
        'contamination': 'images/pcr-curves-contamination.png',
        'primer_dimer': 'images/pcr-curves-primer-dimer.png',
        'low_template': 'images/pcr-curves-low-template.png',
        'high_template': 'images/pcr-curves-high-template.png'
    };

    const imagePath = curveImages[visualType] || curveImages['normal'];
    const description = curveDescriptions[visualType] || curveDescriptions['normal'];

    // Show loading state first
    container.innerHTML = `
        <div class="pcr-curve-container" style="
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            background: white;
        ">
            <div class="loading-state" style="
                padding: 40px;
                text-align: center;
                color: #666;
            ">
                <div style="
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border: 2px solid #f3f3f3;
                    border-radius: 50%;
                    border-top: 2px solid #4CAF50;
                    animation: spin 1s linear infinite;
                    margin-bottom: 10px;
                "></div>
                <p>Loading PCR curves...</p>
            </div>
            <img 
                src="${imagePath}" 
                alt="PCR Curves: ${visualType}"
                style="display: none; width: 100%; height: auto;"
                onload="
                    this.style.display='block'; 
                    this.parentElement.querySelector('.loading-state').style.display='none';
                    this.parentElement.querySelector('.description').style.display='block';
                "
                onerror="
                    this.parentElement.querySelector('.loading-state').innerHTML='<h3>PCR Curves: ${visualType}</h3><p>Image not available</p>';
                "
            >
            <div class="description" style="
                display: none;
                padding: 15px;
                background: #f8f9fa;
                border-top: 1px solid #e9ecef;
                font-size: 14px;
                color: #495057;
            ">
                ${description}
            </div>
        </div>
        
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;
}

// If you want to replace your existing updateProblemVisual function entirely:
function updateProblemVisual(visualType) {
    updateProblemVisualEnhanced(visualType);
}




    // function drawProblemCurves(svg, visualType) {
    //     const curves = {
    //         'flat-curves': [
    //             { color: '#ff4444', points: generateFlatCurve(), label: 'Positive Control' },
    //             { color: '#4444ff', points: generateFlatCurve(), label: 'Sample' }
    //         ],
    //         'delayed-curves': [
    //             { color: '#ff4444', points: generateNormalCurve(25), label: 'Normal Control' },
    //             { color: '#4444ff', points: generateDelayedCurve(35), label: 'High Ct Sample' }
    //         ],
    //         'inhibition-curves': [
    //             { color: '#ff4444', points: generateNormalCurve(28), label: 'Positive Control' },
    //             { color: '#ffaa00', points: generateFlatCurve(), label: 'Internal Control (Failed)' },
    //             { color: '#4444ff', points: generateFlatCurve(), label: 'Sample' }
    //         ],
    //         'contamination-curves': [
    //             { color: '#ff4444', points: generateNormalCurve(25), label: 'Positive Control' },
    //             { color: '#ff0000', points: generateNormalCurve(30), label: 'Negative Control!' },
    //             { color: '#4444ff', points: generateNormalCurve(27), label: 'Sample' }
    //         ],
    //         'variable-curves': [
    //             { color: '#ff4444', points: generateNormalCurve(25), label: 'Rep 1' },
    //             { color: '#ff6666', points: generateNormalCurve(28), label: 'Rep 2' },
    //             { color: '#ff8888', points: generateNormalCurve(31), label: 'Rep 3' }
    //         ],
    //         'multiple-peaks': [
    //             { color: '#ff4444', points: generateNormalCurve(25), label: 'Specific Product' },
    //             { color: '#ff8888', points: generateNormalCurve(22), label: 'Non-specific Product' }
    //         ]
    //     };

    //     const curvesToDraw = curves[visualType] || curves['flat-curves'];

    //     curvesToDraw.forEach((curve, index) => {
    //         const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    //         const pathData = 'M' + curve.points.map(p => `${p.x},${p.y}`).join('L');
    //         path.setAttribute('d', pathData);
    //         path.setAttribute('stroke', curve.color);
    //         path.setAttribute('stroke-width', '3');
    //         path.setAttribute('fill', 'none');
    //         svg.appendChild(path);

    //         // Add legend
    //         const legendY = 70 + (index * 25);
    //         const legendLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    //         legendLine.setAttribute('x1', '60');
    //         legendLine.setAttribute('y1', legendY);
    //         legendLine.setAttribute('x2', '85');
    //         legendLine.setAttribute('y2', legendY);
    //         legendLine.setAttribute('stroke', curve.color);
    //         legendLine.setAttribute('stroke-width', '3');
    //         svg.appendChild(legendLine);

    //         const legendText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    //         legendText.setAttribute('x', '90');
    //         legendText.setAttribute('y', legendY + 5);
    //         legendText.setAttribute('font-family', 'Arial');
    //         legendText.setAttribute('font-size', '12');
    //         legendText.textContent = curve.label;
    //         svg.appendChild(legendText);
    //     });
    // }

    // function updateProblemVisual(visualType) {
    //     const container = document.getElementById('problem-visual');
    //     if (!container) return;

    //     // Create SVG chart based on visual type
    //     const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    //     svg.setAttribute('class', 'pcr-curve-chart');
    //     svg.setAttribute('viewBox', '0 0 500 300');

    //     // Add chart background
    //     const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    //     rect.setAttribute('width', '480');
    //     rect.setAttribute('height', '260');
    //     rect.setAttribute('x', '10');
    //     rect.setAttribute('y', '20');
    //     rect.setAttribute('fill', 'white');
    //     rect.setAttribute('stroke', '#ddd');
    //     svg.appendChild(rect);

    //     // Add axes
    //     const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    //     xAxis.setAttribute('x1', '50');
    //     xAxis.setAttribute('y1', '250');
    //     xAxis.setAttribute('x2', '450');
    //     xAxis.setAttribute('y2', '250');
    //     xAxis.setAttribute('stroke', '#333');
    //     xAxis.setAttribute('stroke-width', '2');
    //     svg.appendChild(xAxis);

    //     const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    //     yAxis.setAttribute('x1', '50');
    //     yAxis.setAttribute('y1', '50');
    //     yAxis.setAttribute('x2', '50');
    //     yAxis.setAttribute('y2', '250');
    //     yAxis.setAttribute('stroke', '#333');
    //     yAxis.setAttribute('stroke-width', '2');
    //     svg.appendChild(yAxis);

    //     // Add labels
    //     const xLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    //     xLabel.setAttribute('x', '250');
    //     xLabel.setAttribute('y', '290');
    //     xLabel.setAttribute('text-anchor', 'middle');
    //     xLabel.setAttribute('font-family', 'Arial');
    //     xLabel.setAttribute('font-size', '14');
    //     xLabel.textContent = 'Cycle Number';
    //     svg.appendChild(xLabel);

    //     const yLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    //     yLabel.setAttribute('x', '25');
    //     yLabel.setAttribute('y', '150');
    //     yLabel.setAttribute('text-anchor', 'middle');
    //     yLabel.setAttribute('font-family', 'Arial');
    //     yLabel.setAttribute('font-size', '14');
    //     yLabel.setAttribute('transform', 'rotate(-90, 25, 150)');
    //     yLabel.textContent = 'Fluorescence';
    //     svg.appendChild(yLabel);

    //     // Draw curves based on problem type
    //     drawProblemCurves(svg, visualType);

    //     container.innerHTML = '';
    //     container.appendChild(svg);
    // }

    function generateAssessmentQuestions(questions) {
        const container = document.getElementById('assessment-questions');
        if (!container) return;

        container.innerHTML = '';

        questions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'assessment-question';
            questionDiv.innerHTML = `
                <p><strong>Q${index + 1}:</strong> ${question.q}</p>
                <div class="question-options">
                    ${question.type === 'yes-no' ? 
                        '<label><input type="radio" name="q' + index + '" value="yes"> Yes</label>' +
                        '<label><input type="radio" name="q' + index + '" value="no"> No</label>'
                        : question.type === 'multiple' ?
                        '<select name="q' + index + '"><option>Select...</option><option>Option 1</option><option>Option 2</option></select>'
                        : '<input type="text" name="q' + index + '" placeholder="Your answer...">'
                    }
                </div>
            `;
            container.appendChild(questionDiv);
        });
    }

    // Global functions for troubleshooting (called from HTML onclick attributes)
    window.selectProblem = function(problemId) {
        currentProblem = problemId;
        const data = troubleshootingData[problemId];

        // Update analysis screen
        const problemTitle = document.getElementById('problem-title');
        const problemDesc = document.getElementById('problem-desc');
        
        if (problemTitle) problemTitle.textContent = data.title;
        if (problemDesc) problemDesc.textContent = data.description;

        // Generate visual
        updateProblemVisual(data.visual);

        // Generate assessment questions
        generateAssessmentQuestions(data.questions);

        goToTroubleshootScreen('analysis');
    };

    window.goToTroubleshootScreen = function(screenId) {
        // Hide all screens
        document.querySelectorAll('.troubleshoot-screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show selected screen
        const targetScreen = document.getElementById('troubleshoot-' + screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        // Scroll to top when changing troubleshooting screens
       // window.scrollTo({ top: 0, behavior: 'smooth' });         
        }
    };

    window.startTroubleshooting = function() {
        currentStep = 0;
        selectedChoices = [];
        updateDecisionStep();
        goToTroubleshootScreen('decision');
    };

    window.nextStep = function() {
        const data = troubleshootingData[currentProblem];

        if (currentStep < data.steps.length - 1) {
            currentStep++;
            updateDecisionStep();
        } else {
            showResolution();
        }
    };

    window.previousStep = function() {
        if (currentStep > 0) {
            currentStep--;
            updateDecisionStep();

            // Restore previous selection
            if (selectedChoices[currentStep]) {
                const selectedChoice = document.querySelector(`[data-choice-id="${selectedChoices[currentStep]}"]`);
                if (selectedChoice) {
                    selectChoice(selectedChoice);
                }
            }
        }
    };

    window.resetTroubleshooting = function() {
        currentProblem = null;
        currentStep = 0;
        selectedChoices = [];
        goToTroubleshootScreen('dashboard');
    };

    function updateDecisionStep() {
        const data = troubleshootingData[currentProblem];
        const step = data.steps[currentStep];

        const stepTitle = document.getElementById('step-title');
        const stepDescription = document.getElementById('step-description');
        const currentStepSpan = document.getElementById('current-step');
        const totalStepsSpan = document.getElementById('total-steps');

        if (stepTitle) stepTitle.textContent = step.title;
        if (stepDescription) stepDescription.textContent = step.description;
        if (currentStepSpan) currentStepSpan.textContent = currentStep + 1;
        if (totalStepsSpan) totalStepsSpan.textContent = data.steps.length;

        // Update choices
        const choicesContainer = document.getElementById('choice-options');
        if (choicesContainer) {
            choicesContainer.innerHTML = '';

            step.choices.forEach(choice => {
                const choiceDiv = document.createElement('div');
                choiceDiv.className = 'choice-option';
                choiceDiv.dataset.choiceId = choice.id;
                choiceDiv.innerHTML = `
                    <h6>${choice.title}</h6>
                    <p>${choice.desc}</p>
                `;
                choiceDiv.addEventListener('click', function() {
                    selectChoice(this);
                });
                choicesContainer.appendChild(choiceDiv);
            });
        }

        // Update navigation
        const prevStepBtn = document.getElementById('prev-step');
        const nextStepBtn = document.getElementById('next-step');
        
        if (prevStepBtn) prevStepBtn.disabled = currentStep === 0;
        if (nextStepBtn) nextStepBtn.disabled = true; // Enable when choice is made
    }

    function selectChoice(choiceElement) {
        // Remove previous selection
        document.querySelectorAll('.choice-option').forEach(el => {
            el.classList.remove('selected');
        });

        // Select current choice
        choiceElement.classList.add('selected');

        // Store choice
        selectedChoices[currentStep] = choiceElement.dataset.choiceId;

        // Enable next button
        const nextStepBtn = document.getElementById('next-step');
        if (nextStepBtn) nextStepBtn.disabled = false;
    }

    function showResolution() {
        const data = troubleshootingData[currentProblem];

        const resolutionTitle = document.getElementById('resolution-title');
        const resolutionDescription = document.getElementById('resolution-description');

        if (resolutionTitle) resolutionTitle.textContent = data.resolution.title;
        if (resolutionDescription) resolutionDescription.textContent = data.resolution.description;

        // Show actions taken
        const actionsList = document.getElementById('actions-taken');
        if (actionsList) {
            actionsList.innerHTML = '';
            selectedChoices.forEach((choiceId, stepIndex) => {
                const step = data.steps[stepIndex];
                const choice = step.choices.find(c => c.id === choiceId);
                if (choice) {
                    const li = document.createElement('li');
                    li.textContent = `${step.title}: ${choice.title}`;
                    actionsList.appendChild(li);
                }
            });
        }

        // Show prevention tips
        const preventionList = document.getElementById('prevention-list');
        if (preventionList) {
            preventionList.innerHTML = '';
            data.resolution.prevention.forEach(tip => {
                const li = document.createElement('li');
                li.textContent = tip;
                preventionList.appendChild(li);
            });
        }

        goToTroubleshootScreen('resolution');
    }

    // Initialize troubleshooting simulator
    function initTroubleshooting() {
        // Add click handlers to problem cards
        document.querySelectorAll('.problem-card').forEach(card => {
            card.addEventListener('click', function() {
                const problemId = this.dataset.problem;
                selectProblem(problemId);
            });
        });
    }

    // Initialize troubleshooting when DOM is ready
    initTroubleshooting();

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