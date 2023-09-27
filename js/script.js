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
    progressBar.style.removeProperty("width") 
    progressBar.style.setProperty("width", percentage) 


    totalMoneyBacked.innerText = "$" + formattedMoney;
    totalPeopleBacked.innerText = formattedBackers;
}

const formatStandsLeftFn = (numOfBamboo, numOfBlack, numOfMahogany) => {
    numberOfBamboo.forEach((display) => {
        if (numOfBamboo < 0) {
            numOfBamboo = 0;
        }
        display.innerText = numOfBamboo;
    })

    numberOfBlack.forEach((display) => {
        if (numOfBlack < 0) {
            numOfBlack = 0;
        }
        display.innerText = numOfBlack;
    })

    numberOfMahogany.forEach((display) => {
        if (numOfMahogany <= 0) {
            numOfMahogany = 0;
            outOfStockFn("mahogany");
        }
        display.innerText = numOfMahogany;
    })
}

const outOfStockFn = (standType) => {
    //num can't go below 0
    //out of stock gets called a string "black", "bamboo"
    //then switch case each case do appropriate styling;
    
    
    switch (standType) {

        case "bamboo":
            selectBambooStand.classList.add("disable"); 
            break;

        case "black":
            selectBlackStand.classList.add("disable"); 
            break;

        case "mahogany":
            selectMahoganyButton.forEach((button) => {
                button.disabled = "true";
                button.innerText = "";
                button.innerText = "Out of Stock"
            })
            
            selectMahoganyContainer.forEach((container) => {
                container.classList.add("opacity-50");
                console.log(container)
            })
            
            mahoganyHoverButton.forEach((hover) => {
                hover.disabled = "true";
                hover.classList.remove("group-hover:bg-teal-600")
                hover.classList.remove("group-hover:text-teal-600")
            })
            break;
    }

}

//math eventlisteners;
window.addEventListener("load", () => {
    formatValueDisplayFn(moneyBacked, totalBackers);
    formatStandsLeftFn(numOfBamboo, numOfBlack, numOfMahogany);
})



//main page variables
const bookmarkButton = document.getElementById("bookmarkButton");
const bookmarkText = document.querySelector(".bookmark__text");
const bookmarkCircle = document.querySelector(".bookmark__circle");
const bookmarkSign = document.querySelector(".bookmark__sign");

const totalMoneyBacked = document.getElementById("total-money-backed");
const totalPeopleBacked = document.getElementById("total-backers");
const numberOfBamboo = document.querySelectorAll(".number-of-bamboo"); 
const numberOfBlack = document.querySelectorAll(".number-of-black"); 
const numberOfMahogany = document.querySelectorAll(".number-of-mahogany"); 

const inputPledge = document.querySelectorAll(".inputting-pledge");

const progressBar = document.getElementById("progress-bar");

const selectBambooStand = document.getElementById("select-bamboo-stand"); 
const selectBlackStand = document.getElementById("select-black-stand"); 
const selectMahoganyButton = document.querySelectorAll(".select-mahogany-button"); 

const selectMahoganyContainer = document.querySelectorAll(".select-mahogany-container")

const hamburgerButton = document.getElementById("hamburger-button");
const hamburgerMenu = document.getElementById("hamburger-menu");
const closeHamburgerButton = document.getElementById("close-hamburger-button");


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

const HamburgerMenuFn = () => {
    hamburgerMenu.classList.remove("hidden");
    hamburgerButton.classList.add("hidden");
    closeHamburgerButton.classList.remove("hidden"); 
}

const CloseHamburgerFn = () => {
    hamburgerMenu.classList.add("hidden");
    closeHamburgerButton.classList.add("hidden"); 
    hamburgerButton.classList.remove("hidden");
}

//main page event listeners
bookmarkButton.addEventListener("click", BookmarkFn);
hamburgerButton.addEventListener("click", HamburgerMenuFn);
closeHamburgerButton.addEventListener("click", CloseHamburgerFn);


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
const mahoganyHoverButton = document.querySelectorAll(".hover-mahogany-button");

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
        buttonBlackStand.classList.replace("text-black","text-teal-600");
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
        console.log(modalContainer)
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
                let amountOfStands = pledge.childNodes[3].id;
                
                if (amountOfStands.includes("bamboo")) {
                    numOfBamboo -= 1;
                }

                if (amountOfStands.includes("black")) {
                    numOfBlack -= 1;
                }

                if (amountOfStands.includes("mahogany")) {
                    numOfMahogany -= 1;
                }

                formatStandsLeftFn(numOfBamboo, numOfBlack, numOfMahogany);
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
            default:
                NoRewardFn();
                break;
        }

    })
})

closeModal.addEventListener("click", () => {
    ResetFn(); 
    modal.close();
});

closeModalConfirmation.addEventListener("click", () => {
    ResetFn();
    modalConfirmation.close();
})

