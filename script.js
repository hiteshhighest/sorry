let coun = 1;
const textElement = document.querySelector('.text');
const imageElement = document.querySelector('.image-cat');
const initial_value = textElement ? textElement.innerText : '';
let changed_value = initial_value;

function Choice_no() {
    if (coun <= 3) {
        if (textElement.innerText === initial_value) {
            changed_value = 'Please?';
            updateImage(2);
        } else {
            changed_value += " Please?";
            coun++;
            updateImage(coun + 1);
        }
        value_change();
    } else if (coun === 5) {
        changed_value = initial_value;
        coun = 1;
        updateImage(1);
        value_change();
    } else {
        changed_value = 'I hate you';
        updateImage(4);
        coun++;
        value_change();
    }
}

function value_change() {
    textElement.innerText = changed_value;
}

function updateImage(imageNumber) {
    const imageMap = {
        1: 'Image/Cat - 1.jpg',
        2: 'Image/Cat - 2.jpeg',
        3: 'Image/Cat - 3.jpg',
        4: 'Image/Cat - 4.jpeg'
    };

    if (imageMap[imageNumber]) {
        imageElement.src = imageMap[imageNumber];
    }
}
