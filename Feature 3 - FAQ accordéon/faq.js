const faqData = [
    {
        question: "Quels sont vos délais de livraison ?",
        answer: "Nos délais de livraison varient selon votre localisation. En France métropolitaine, comptez 2-3 jours ouvrés pour une livraison standard et 24h pour une livraison express. Pour l'international, les délais sont de 5-10 jours ouvrés selon la destination."
    },
    {
        question: "Comment puis-je retourner un produit ?",
        answer: "Vous disposez de 30 jours pour retourner un produit. Il doit être dans son emballage d'origine et en parfait état. Connectez-vous à votre compte, accédez à vos commandes et cliquez sur 'Retourner cet article'. Nous vous fournirons une étiquette de retour prépayée."
    },
    {
        question: "Quels modes de paiement acceptez-vous ?",
        answer: "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay et les virements bancaires. Tous les paiements sont sécurisés par cryptage SSL 256 bits."
    },
    {
        question: "Proposez-vous une garantie sur vos produits ?",
        answer: "Oui, tous nos produits bénéficient d'une garantie constructeur de 2 ans minimum. Certains produits premium ont une garantie étendue jusqu'à 5 ans. En cas de défaut, nous nous occupons de toutes les démarches avec le fabricant."
    },
    {
        question: "Comment contacter le service client ?",
        answer: "Notre service client est disponible du lundi au vendredi de 9h à 18h. Vous pouvez nous contacter par téléphone au 01 23 45 67 89, par email à support@exemple.com, ou via notre chat en direct sur le site web."
    },
    {
        question: "Puis-je modifier ma commande après l'avoir passée ?",
        answer: "Vous pouvez modifier votre commande dans les 30 minutes suivant sa validation. Après ce délai, nous ne pouvons plus garantir la modification car la préparation de la commande peut avoir commencé. Contactez rapidement notre service client pour toute demande."
    },
    {
        question: "Offrez-vous des réductions pour les commandes en gros ?",
        answer: "Oui, nous proposons des tarifs dégressifs pour les commandes en gros. Contactez notre équipe commerciale."
    }
];

class FAQAccordeon {
    constructor() {
        this.container = document.getElementById('faqContainer');
        this.searchInput = document.getElementById('searchInput');
        this.askQuestionBtn = document.getElementById('askQuestionBtn');
        this.questionForm = document.getElementById('questionForm');
        this.faqItemTemplate = document.getElementById('faq-item-template');
        this.noResultsTemplate = document.getElementById('no-results-template');
        this.successMessageTemplate = document.getElementById('success-message-template');
        this.activeItems = new Set();
        this.singleMode = false;
        this.init();
    }

    init() {
        this.renderFAQ();
        this.setupEventListeners();
    }

    renderFAQ(dataToRender = faqData) {
        this.container.innerHTML = '';
        
        if (dataToRender.length === 0) {
            if (this.noResultsTemplate) {
                const noResultsClone = this.noResultsTemplate.content.cloneNode(true);
                this.container.appendChild(noResultsClone);

                const askBtn = this.container.querySelector('#askQuestionFromNoResults');
                if (askBtn) {
                    askBtn.addEventListener('click', () => {
                        this.showQuestionForm();
                    });
                }
            } else {
                this.container.innerHTML = '<div class="no-results"><p>Aucun résultat trouvé.</p></div>';
            }
            return;
        }

        dataToRender.forEach((item, index) => {
            const faqItem = this.createFAQItem(item, index);
            this.container.appendChild(faqItem);
        });
    }

    createFAQItem(item, index) {
        const faqItemClone = this.faqItemTemplate.content.cloneNode(true);
        const faqItem = faqItemClone.querySelector('.faq-item');
        const questionElement = faqItemClone.querySelector('.faq-question');
        const questionText = faqItemClone.querySelector('.faq-question-text');
        const answerElement = faqItemClone.querySelector('.faq-answer');
        const answerContent = faqItemClone.querySelector('.faq-answer-content');
        faqItem.dataset.index = index;
        questionElement.dataset.index = index;
        answerElement.dataset.index = index;
        questionText.textContent = item.question;
        answerContent.textContent = item.answer;

        return faqItemClone;
    }

    setupEventListeners() {
        this.container.addEventListener('click', (e) => {
            if (e.target.closest('.faq-question')) {
                const questionElement = e.target.closest('.faq-question');
                const index = questionElement.dataset.index;
                this.toggleAnswer(index);
            }
        });

        this.searchInput.addEventListener('input', (e) => {
            this.filterFAQ(e.target.value);
        });
        this.setupQuestionForm();

        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === '/') {
                e.preventDefault();
                this.searchInput.focus();
            }
        });
    }

    toggleAnswer(index) {
        const faqItem = document.querySelector(`.faq-item[data-index="${index}"]`);
        const answerElement = faqItem.querySelector('.faq-answer');
        const isActive = faqItem.classList.contains('active');

        if (this.singleMode && !isActive) {
            this.closeAllAnswers();
        }

        if (isActive) {
            this.closeAnswer(faqItem, answerElement, index);
        } else {
            this.openAnswer(faqItem, answerElement, index);
        }
    }

    openAnswer(faqItem, answerElement, index) {
        faqItem.classList.add('active');
        answerElement.classList.add('active');
        this.activeItems.add(index);
        const icon = faqItem.querySelector('.faq-icon');
        icon.textContent = '−';
    }

    closeAnswer(faqItem, answerElement, index) {
        faqItem.classList.remove('active');
        answerElement.classList.remove('active');
        this.activeItems.delete(index);
        const icon = faqItem.querySelector('.faq-icon');
        icon.textContent = '+';
    }

    closeAllAnswers() {
        document.querySelectorAll('.faq-item.active').forEach((item) => {
            const index = item.dataset.index;
            const answerElement = item.querySelector('.faq-answer');
            this.closeAnswer(item, answerElement, index);
        });
    }

    filterFAQ(searchTerm) {
        const filteredData = faqData.filter(item => 
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        this.renderFAQ(filteredData);
        this.restoreOpenStates();
    }

    restoreOpenStates() {
        this.activeItems.forEach(index => {
            const faqItem = document.querySelector(`.faq-item[data-index="${index}"]`);
            if (faqItem) {
                const answerElement = faqItem.querySelector('.faq-answer');
                this.openAnswer(faqItem, answerElement, index);
            }
        });
    }

    setupQuestionForm() {
        this.askQuestionBtn.addEventListener('click', () => {
            this.toggleQuestionForm();
        });

        const cancelBtn = document.getElementById('cancelQuestion');
        const submitBtn = document.getElementById('submitQuestion');

        cancelBtn.addEventListener('click', () => {
            this.hideQuestionForm();
        });

        submitBtn.addEventListener('click', () => {
            this.submitQuestion();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.questionForm.classList.contains('hidden')) {
                this.hideQuestionForm();
            }
        });
    }

    toggleQuestionForm() {
        if (this.questionForm.classList.contains('hidden')) {
            this.showQuestionForm();
        } else {
            this.hideQuestionForm();
        }
    }

    showQuestionForm() {
        this.questionForm.classList.remove('hidden');
        this.askQuestionBtn.textContent = 'Annuler';
        document.getElementById('userQuestion').focus();
    }

    hideQuestionForm() {
        this.questionForm.classList.add('hidden');
        this.askQuestionBtn.textContent = 'Poser une question';
        this.clearQuestionForm();
    }

    clearQuestionForm() {
        document.getElementById('userQuestion').value = '';
        document.getElementById('userDetails').value = '';
        
        const successMessage = this.questionForm.querySelector('.success-message');
        if (successMessage) {
            successMessage.remove();
        }
    }

    submitQuestion() {
        const question = document.getElementById('userQuestion').value.trim();
        const details = document.getElementById('userDetails').value.trim();

        if (!question) {
            alert('Veuillez saisir votre question.');
            return;
        }

        this.simulateQuestionSubmission(question, details);
    }

    simulateQuestionSubmission(question, details) {
        const successMessageClone = this.successMessageTemplate.content.cloneNode(true);
        const oldMessage = this.questionForm.querySelector('.success-message');
        if (oldMessage) {
            oldMessage.remove();
        }

        this.questionForm.appendChild(successMessageClone);
        setTimeout(() => {
            this.hideQuestionForm();
        }, 3000);
    }

    toggleSingleMode() {
        this.singleMode = !this.singleMode;
        if (this.singleMode && this.activeItems.size > 1) {
            const firstActive = Array.from(this.activeItems)[0];
            this.closeAllAnswers();
            const faqItem = document.querySelector(`.faq-item[data-index="${firstActive}"]`);
            if (faqItem) {
                const answerElement = faqItem.querySelector('.faq-answer');
                this.openAnswer(faqItem, answerElement, firstActive);
            }
        }
    }

    addQuestion(question, answer) {
        faqData.push({ question, answer });
        this.renderFAQ();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const faq = new FAQAccordeon();
    window.faqInstance = faq;

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'M') {
            faq.toggleSingleMode();
            const mode = faq.singleMode ? 'activé' : 'désactivé';
            
            const title = document.querySelector('header h1');
            const originalText = title.textContent;
            title.textContent = `FAQ - Mode single ${mode}`;
            setTimeout(() => {
                title.textContent = originalText;
            }, 2000);
        }
    });

    setTimeout(() => {
        document.querySelectorAll('.faq-item').forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });
    }, 100);
});