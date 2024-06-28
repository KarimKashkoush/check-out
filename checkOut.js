function CreditCardNumber(input) {
    let value = input.value.replace(/\D/g, '');

    if (value.length > 16) {
        value = value.slice(0, 16);
    }

    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

    input.value = value;
}

function formatEX(input) {
    let value = input.value.replace(/\D/g, '');

    if (value.length > 4) {
        value = value.slice(0, 4);
    }

    value = value.replace(/(\d{2})(?=\d)/g, '$1 / ');

    input.value = value;
}

function formatCVV(input) {
    let value = input.value.replace(/\D/g, '');

    if (value.length > 3) {
        value = value.slice(0, 3);
    }

    input.value = value;
}

let visaName = document.getElementById("visaName");
let visaNumber = document.getElementById("visaNumber");
let ex = document.getElementById("ex");
let cvv = document.getElementById("cvv");
let loca = document.getElementById("loca");
let payment = document.getElementById("payment");
let trans = document.getElementsByName("trans")
let methodPaymentInput = document.getElementById("methodPaymentInput")
let methodPayment = document.getElementById("methodPayment")
let transferPayment = document.getElementById("transferPayment")
let transferName = document.getElementById("transferName")
let transferNumber = document.getElementById("transferNumber")


let setSucces = (ele) => {
    let parent = ele.parentElement
    let error = parent.querySelector(".errorma")
    error.innerHTML = ""

    ele.classList.add("succes")
    ele.classList.remove("error")
}

let setError = (ele, errorMa) => {
    let parent = ele.parentElement
    let error = parent.querySelector(".errorma")
    error.innerHTML = errorMa

    ele.classList.add("error")
    ele.classList.remove("succes")
}


for (let i = 0; i < trans.length; i++) {
    if (trans[i].checked) {
        methodPaymentInput.value = trans[i].value;
        break;
    }
}

methodPayment.onchange = () => {
    for (let i = 0; i < trans.length; i++) {
        if (trans[i].checked) {
            methodPaymentInput.value = trans[i].value;
            break;
        }
    }

    if (methodPaymentInput.value == "transfer") {
        transferPayment.style.display = "block";
        payment.style.display = "none";
    } else {
        payment.style.display = "block";
        transferPayment.style.display = "none";
    }
}

payment.onsubmit = (e) => {
    if (visaName.value == "" || visaName.value.length < 4 || ex.value.length < 4 || visaNumber.value.length < 16 || cvv.value.length < 3 || loca.value == "") {
        e.preventDefault()
    }
    visaNameCheck()
    visaNumberCheck()
    visaExCheck()
    visaCvvCheck()
    locationCheck()
}

transferPayment.onsubmit = (e) => {
    if (transferName.value == "" || transferNumber.value == "") {
        e.preventDefault()

        transferNameCheck()
        transferNumberCheck()
    }
}

let transferNameCheck = transferName.onblur = () => {
    if (transferName.value == "") {
        setError(transferName, "الاسم مطلوب")
    } else if (transferName.value.length < 4) {
        setError(transferName, "برجاء ادخال الاسم كامل وبشكل صحيح ")
    } else {
        setSucces(transferName)
    }
}

let transferNumberCheck = transferNumber.onblur = () => {
    if (transferNumber.value == "") {
        setError(transferNumber, "رقم الحساب او الأيبان المحول منه مطلوب")
    } else if (transferNumber.value.length < 16) {
        setError(transferNumber, "برجاء ادخال رقم الحساب أو الأيبان بشكل صحيح ")
    } else {
        setSucces(transferNumber)
    }
}

let visaNameCheck = visaName.onblur = () => {
    if (visaName.value == "") {
        setError(visaName, "الاسم مطلوب")
    } else if (visaName.value.length < 4) {
        setError(visaName, "برجاء ادخال الاسم كامل وبشكل صحيح ")
    } else {
        setSucces(visaName)
    }
}

let visaNumberCheck = visaNumber.onblur = () => {
    if (visaNumber.value == "") {
        setError(visaNumber, "رقم الفيزا مطلوب")
    } else if (visaNumber.value.length < 16) {
        setError(visaNumber, "برجاء ادخال رقم الفيزا بشكل صحيح (16 رقم علي وجه البطاقة)")
    } else {
        setSucces(visaNumber)
    }
}

let visaExCheck = ex.onblur = () => {
    if (ex.value == "") {
        setError(ex, "تاريخ انتهاء الفيزا مطلوب")
    } else if (ex.value.length < 4) {
        setError(ex, "برجاء ادخال التاريخ بشكل صحيح")
    } else {
        setSucces(ex)
    }
}

let visaCvvCheck = cvv.onblur = () => {
    if (cvv.value == "") {
        setError(cvv, "رمز الأمان مطلوب")
    } else if (cvv.value.length < 3) {
        setError(cvv, "برجاء ادخال رمز الأمان بشكل صحيح المدون خلف البطاقة")
    } else {
        setSucces(cvv)
    }
}

let locationCheck = loca.onblur = () => {
    if (loca.value == "") {
        setError(loca, "العنوان مطلوب")
    } else if (loca.value.length < 3) {
        setError(loca, " برجاء ادخال العنوان بشكل صحيح ")
    } else {
        setSucces(loca)
    }
}
