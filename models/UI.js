export class UI{
    constructor(){}

    /**
     * 
     * @param {string} text question to render
     */
    showQuestion(text){
        const questionTitle = document.getElementById("question");
        questionTitle.innerHTML = text;
    }

    /**
     * 
     * @param {string[]} choices the choices of the question
     */
    showChoices(choices, callback){
        const choiceContainer = document.getElementById("choices");
        let fragmento = document.createDocumentFragment();

        for(let i = 0; i < choices.length; i++){
            const button = document.createElement("button");
            button.innerText = choices[i];
            button.classList.add("button");
            button.addEventListener("click", () => callback(choices[i]));
            fragmento.appendChild(button);
        } 

        choiceContainer.replaceChildren(fragmento);
        // choiceContainer.appendChild();
    }

    /**
     * 
     * @param {number} score total score
     */
    showScores(score){
        const gameOverHTML = `
            <h1>Result</h1>
            <h2 id="score">Your Score: ${score}</h2>`;

        const element = document.getElementById("quiz");
        element.innerHTML = gameOverHTML;
    }

    /**
     * 
     * @param {numer} currentIdex the current index the quiz
     * @param {number} total the total question
     */
    showProgress(currentIdex, total){
        let elemnet = document.getElementById("progress");
        elemnet.innerText = `Question ${currentIdex} of ${total}`
    }


}