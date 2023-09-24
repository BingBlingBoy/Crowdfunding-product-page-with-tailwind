//math variables

let moneyBacked = 89914;
let totalBackers = 5007;
let goal = 100000;
let numOfBamboo = 101;
let numOfBlack = 64;
let numOfMahogany = 1;

//math functions

const updateValuesFn = (moneyGiven) => {
    totalBackers += 1;
    moneyBacked = parseFloat(moneyGiven) + moneyBacked;

    formatValueDisplayFn(moneyBacked, totalBackers); 
}

const formatValueDisplayFn = (moneyBacked, totalBackers) => {
    let formattedMoney = moneyBacked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let formattedBackers = totalBackers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    let decimal = moneyBacked / goal;
    let percentage = (decimal.toFixed(2) * 100).toString() + '%';
    console.log(percentage);
    progressBar.style.removeProperty("width") 
    progressBar.style.setProperty("width", percentage) 


    totalMoneyBacked.innerText = "$" + formattedMoney;
    totalPeopleBacked.innerText = formattedBackers;
}

//math eventlisteners;
window.addEventListener("load", () => {
    formatValueDisplayFn(moneyBacked, totalBackers);
})



//main page variables
const bookmarkButton = document.getElementById("bookmarkButton");
const bookmarkText = document.querySelector(".bookmark__text");
const bookmarkCircle = document.querySelector(".bookmark__circle");
const bookmarkSign = document.querySelector(".bookmark__sign");

const totalMoneyBacked = document.getElementById("total-money-backed");
const totalPeopleBacked = document.getElementById("total-backers");

const inputPledge = document.querySelectorAll(".inputting-pledge");

const progressBar = document.getElementById("progress-bar");

//main page functions
const BookmarkFn = () => {
    if (!(bookmarkButton.classList.contains("active"))) {
        bookmarkCircle.classList.replace("fill-[#2F2F2F]","fill-teal-800");
        bookmarkSign.classList.replace("fill-[#B1B1B1]","fill-white");
        bookmarkText.classList.add("text-teal-800");
        bookmarkButton.classList.add("active");
    } else {
        bookmarkCircle.classList.replace("fill-teal-800","fill-[#2F2F2F]");
        bookmarkSign.classList.replace("fill-white","fill-[#B1B1B1]");
        bookmarkText.classList.remove("text-teal-800");
        bookmarkButton.classList.remove("active");
    }
}

//main page event listeners
bookmarkButton.addEventListener("click", BookmarkFn);



//modal button variables
const modal = document.querySelector("#modal-options");
const openModal = document.querySelectorAll(".open-modal-button");
const closeModal = document.querySelector(".close-modal-button");
const modalConfirmation = document.querySelector("#modal-confirmation");
const openModalConfirmation = document.querySelector(".open-modal-confirmation-button")
const closeModalConfirmation = document.querySelector(".close-modal-confirmation-button")

const modalContainers = document.querySelectorAll(".modal__container");
const modalOptions = document.querySelectorAll(".modal__options");
const selectionCircle = document.querySelectorAll(".circle__options");
const hiddenModalContent = document.querySelectorAll(".hidden__content");

const buttonNoReward = document.getElementById("button-no-reward");
const noRewardSelectionCircle = document.querySelector("#no-reward-selection");
const hiddenNoRewardContent = document.getElementById("hidden-no-reward-content");
const noRewardConfirmation = document.getElementById("no-reward-confirmation")

const buttonBambooStand = document.getElementById("button-bamboo-stand");
const bambooStandSelectionCircle = document.getElementById("bamboo-stand-selection");
const hiddenBambooStandContent = document.getElementById("hidden-bamboo-content");
const bambooInputAmount = document.getElementById("bamboo-input-amount");

const buttonBlackStand = document.getElementById("button-black-stand");
const blackStandSelectionCircle = document.getElementById("black-stand-selection");
const hiddenBlackStandContent = document.getElementById("hidden-black-content");
const blackInputAmount = document.getElementById("black-input-amount");

const buttonMahoganyStand = document.getElementById("button-mahogany-stand");
const mahoganyStandSelectionCircle = document.getElementById("mahogany-stand-selection");
const hiddenMahoganyStandContent = document.getElementById("hidden-mahogany-content");
const mahoganyInputAmount = document.getElementById("mahogany-input-amount");

const continueButton = document.querySelectorAll(".continue");

//modal functions
const NoRewardFn = () => {
    if (!(hiddenNoRewardContent.classList.contains("hidden"))) {
        buttonNoReward.classList.replace("text-teal-600", "text-black");
        noRewardSelectionCircle.classList.remove("bg-teal-600");
        hiddenNoRewardContent.classList.add("hidden");
    } else {
        buttonNoReward.classList.add("text-teal-600");
        noRewardSelectionCircle.classList.add("bg-teal-600");
        hiddenNoRewardContent.classList.remove("hidden");
    }
}

const BambooStandFn = () => {
    if (!(hiddenBambooStandContent.classList.contains("hidden"))) {
        buttonBambooStand.classList.replace("text-teal-600", "text-black");
        bambooStandSelectionCircle.classList.remove("bg-teal-600");
        hiddenBambooStandContent.classList.add("hidden");
    } else {
        buttonBambooStand.classList.add("text-teal-600");
        bambooStandSelectionCircle.classList.add("bg-teal-600");
        hiddenBambooStandContent.classList.remove("hidden");
        bambooInputAmount.focus();
    }
}

const BlackStandFn = () => {
    if (!(hiddenBlackStandContent.classList.contains("hidden"))) {
        buttonBlackStand.classList.replace("text-teal-600", "text-black");
        blackStandSelectionCircle.classList.remove("bg-teal-600");
        hiddenBlackStandContent.classList.add("hidden");
    } else {
        buttonBlackStand.classList.add("text-teal-600");
        blackStandSelectionCircle.classList.add("bg-teal-600");
        hiddenBlackStandContent.classList.remove("hidden");
        blackInputAmount.focus();
    }
}

const MahoganyStandFn = () => {
    if (!(hiddenMahoganyStandContent.classList.contains("hidden"))) {
        buttonMahoganyStand.classList.replace("text-teal-600", "text-black");
        mahoganyStandSelectionCircle.classList.remove("bg-teal-600");
        hiddenMahoganyStandContent.classList.add("hidden");
    } else {
        buttonMahoganyStand.classList.add("text-teal-600");
        mahoganyStandSelectionCircle.classList.add("bg-teal-600");
        hiddenMahoganyStandContent.classList.remove("hidden");
        mahoganyInputAmount.focus();
    }
}

const ResetModalOptionFn = (modalContainer) => {
    modalOptions.forEach((button) => {
        button.classList.replace("text-teal-600", "text-black");
    })
    
    selectionCircle.forEach((circle) => {
        circle.classList.remove("bg-teal-600");
    })

    hiddenModalContent.forEach((hidden) => {
        if (modalContainer.contains(hidden)) {
            return;
        }
        hidden.classList.add("hidden");
    })
}

const ResetFn = () => {
    modalOptions.forEach((button) => {
        button.classList.replace("text-teal-600", "text-black");
    })
    
    selectionCircle.forEach((circle) => {
        circle.classList.remove("bg-teal-600");
    })

    hiddenModalContent.forEach((hidden) => {
        hidden.classList.add("hidden");
    })
}

// modal event listeners 
modalOptions.forEach((option) => {
    option.addEventListener("click", () => {
        let modalContainer;
        
        modalContainers.forEach((container) => {
            if (container.contains(option)) {
                modalContainer = container;
            }
        })
        
        ResetModalOptionFn(modalContainer);
        switch(option) {
            case buttonNoReward:
                NoRewardFn();
                break;
            case buttonBambooStand:
                BambooStandFn();
                break;
            case buttonBlackStand:
                BlackStandFn();
                break;
            case buttonMahoganyStand:
                MahoganyStandFn();
                break;
        }
    })
})

continueButton.forEach((button) => {
    button.addEventListener("click", () => {
        modal.close();
        
        if (button == noRewardConfirmation) {
            totalBackers += 1
            formatValueDisplayFn(moneyBacked, totalBackers); 
        } 

        inputPledge.forEach((pledge) => {
            if (pledge.contains(button)) {
                let addedMoney = pledge.childNodes[3].value;
                updateValuesFn(addedMoney);
            }
        })
        
           

        modalConfirmation.showModal();
    })
})

openModal.forEach((button) => {
    button.addEventListener("click", () => {
        modal.showModal();

        const modalOption = button.id;

        switch (modalOption) {
            case "select-bamboo-stand":
                BambooStandFn();
                break;
            case "select-black-stand":
                BlackStandFn();
                break;
            case "select-mahogany-stand":
                MahoganyStandFn();
                break;
        }

    })
})

closeModal.addEventListener("click", () => {
    ResetFn(); 
    modal.close();
});

closeModalConfirmation.addEventListener("click", () => {
    modalConfirmation.close();
})

