let arr = [
    {
        id: 1,
        userName: 'Behruz',
        password: "behruz2005",
        isMarried: false
    },
    {
        id: 2,
        userName: 'Sadulla',
        password: "sadik10",
        isMarried: false
    }, {
        id: 3,
        userName: 'Diyora',
        password: "diyora2008",
        isMarried: false
    },
    {
        id: 4,
        userName: 'Nurik',
        password: "Nurik",
        isMarried: true
    },
    {
        id: 5,
        userName: 'Odil',
        password: "odina2008",
        isMarried: undefined
    }
]

let InputUserName = document.querySelector(".userInput")
let InputUserPassword = document.querySelector(".passwordInput")
let loginBtn = document.querySelector('.loginBtn')
let error = document.querySelector(".error")


loginBtn.addEventListener('click', () => {
    arr.map((v) => {
        if (v.userName === InputUserName.value && v.password === InputUserPassword.value) {
            window.location.href = './index.html'
        }
        else {
            error.innerHTML = 'Bunday user topilmadi'
        }
    })
})
