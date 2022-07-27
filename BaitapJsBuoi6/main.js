//Bài 1
function exercise1() {
    //B1: Khởi tạo biến i,total = 0
    let i = 0;
    let total = 0;
    //N2: Dùng vòng lặp while (sum<=10000)
    while (total <= 10000) {
        i++;
        total += i;
    }
    //B3: Xuất kq ra màn hình
    document.getElementById('show1').style.color = "red";
    document.getElementById('show1').innerHTML = "Kết quả = " + i;
}
//Bài 2
function exercise2() {
    //B1: DOM
    let x = +document.getElementById('numX').value;
    let n = +document.getElementById('numN').value;
    //B!: Tạo biến total = 0
    let total = 0;
    //B3: Dùng vòng lặp for. dùng hàm math.pow để tính hàm mũ
    for (let i = 1; i <= n; i++) {
        total += Math.pow(x, i);
    }
    //B4: Xuất kq ra màn hình
    document.getElementById('show2').style.color = "red";
    document.getElementById('show2').innerHTML = "Kết quả = " + total;
}

//Bài 3
function exercise3() {
    //B1: DOM
    let n = +document.getElementById('number').value;
    //B2: Tạo biến total = 1
    let total = 1;
    //B3: Dùng vongg lặp for cho i từ 1 -> >=n =====> total *=i
    for (let i = 1; i <= n; i++) {
        total *= i;
    }
    //B4: Xuất kq ra màn hình
    document.getElementById('show3').style.color = "red";
    document.getElementById('show3').innerHTML = "Kết quả = " + total;
}

//Bài 4
function exercise4() {
    //B1: DOM
    let content = document.getElementById('show4');
    //B2: Tạo variable createDiv = "";
    let createDiv = "";
    //B3: Kiểm tra chẵn lẻ nếu chẵn thì tạo thẻ div class bg-primary cho background màu xanh, nếu lẻ thì tạo div class bg-danger tạo background đỏ (nối chuỗi)
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 1) {
            createDiv += "<div class = 'bg-primary'>";
            createDiv += "Div lẻ " + i;
            createDiv += "</div>";

        } else {
            createDiv += "<div class = 'bg-danger'>";
            createDiv += "Div chẵn " + i;
            createDiv += "</div>";
        }
    }
    content.innerHTML = createDiv;
}

//Bài 5

function exercise5() {
    //B1: DOM
    let num = document.getElementById('num').value;
    let display = document.getElementById('show5');
    //B2: Tạo variable tagprimeNumber = "";
    let tagprimeNumber = "";
    for (let i = 2; i <= num; i++) {
        //B3: kiểm tra nếu là SNT thì gán cho tagprimeNumber theo dạng cộng chuỗi
        if (primeNumber(i)) {
            tagprimeNumber += i + " ";
        }
    }
    //B4: In ra màn hình kq
    display.style.color = "red";
    display.innerHTML = tagprimeNumber;
}
//Hàm kiểm tra số nguyên tố
//Số nguyên tố là số chia hết cho 1 và chính nó 
function primeNumber(number) {
    //B1: Kiểm tra nếu dưới 2 thì không phải số nguyên tố
    if (number < 2) {
        return false;
    }
    //B2: Dùng vòng lặp for kiểm tra i từ 2 ---> căn bậc 2 của number nếu trong quá trình lập number % i == 0 thì trả về false và ngược lại
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0)
            return false;
    }
    return true;
}