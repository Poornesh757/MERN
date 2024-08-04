// Palette Class: Represents a Palette
class Palette {
    constructor(color1, color2, color3, color4) {
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.color4 = color4;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayPalettes() {
        const palettes = Store.getPalettes();
        palettes.forEach((palette) => UI.addPaletteToList(palette));
    }

    static addPaletteToList(palette) {
        const list = document.querySelector('#palette-list');
        const div = document.createElement('div');
        div.className = 'palette';

        div.innerHTML = `
            <div class="colors">
                <div class="color" style="background-color: ${palette.color1};"></div>
                <div class="color" style="background-color: ${palette.color2};"></div>
                <div class="color" style="background-color: ${palette.color3};"></div>
                <div class="color" style="background-color: ${palette.color4};"></div>
            </div>
            <div class="details">
                <button class="btn btn-danger btn-sm delete">Delete</button>
            </div>
        `;

        list.appendChild(div);
    }

    static deletePalette(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#palette-form');
        container.insertBefore(div, form);

        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#color1').value = '';
        document.querySelector('#color2').value = '';
        document.querySelector('#color3').value = '';
        document.querySelector('#color4').value = '';
    }
}

// Store Class: Handles Storage
class Store {
    static getPalettes() {
        let palettes;
        if(localStorage.getItem('palettes') === null) {
            palettes = [];
        } else {
            palettes = JSON.parse(localStorage.getItem('palettes'));
        }

        return palettes;
    }

    static addPalette(palette) {
        const palettes = Store.getPalettes();
        palettes.push(palette);
        localStorage.setItem('palettes', JSON.stringify(palettes));
    }

    static removePalette(index) {
        const palettes = Store.getPalettes();
        palettes.splice(index, 1);
        localStorage.setItem('palettes', JSON.stringify(palettes));
    }
}

// Event: Display Palettes
document.addEventListener('DOMContentLoaded', UI.displayPalettes);

// Event: Add a Palette
document.querySelector('#palette-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const color1 = document.querySelector('#color1').value;
    const color2 = document.querySelector('#color2').value;
    const color3 = document.querySelector('#color3').value;
    const color4 = document.querySelector('#color4').value;

    // Validate
    if(color1 === '' || color2 === '' || color3 === '' || color4 === '') {
        UI.showAlert('Please select all colors', 'danger');
    } else {
        // Instantiate palette
        const palette = new Palette(color1, color2, color3, color4);

        // Add Palette to UI
        UI.addPaletteToList(palette);

        // Add palette to store
        Store.addPalette(palette);

        // Show success message
        UI.showAlert('Palette Added', 'success');

        // Clear fields
        UI.clearFields();
    }
});

// Event: Remove a Palette
document.querySelector('#palette-list').addEventListener('click', (e) => {
    // Remove palette from UI
    UI.deletePalette(e.target);

    // Remove palette from store
    const palettes = Store.getPalettes();
    palettes.forEach((palette, index) => {
        if(e.target.parentElement.previousElementSibling.children[0].style.backgroundColor === palette.color1 &&
           e.target.parentElement.previousElementSibling.children[1].style.backgroundColor === palette.color2 &&
           e.target.parentElement.previousElementSibling.children[2].style.backgroundColor === palette.color3 &&
           e.target.parentElement.previousElementSibling.children[3].style.backgroundColor === palette.color4) {
            Store.removePalette(index);
        }
    });

    // Show success message
    UI.showAlert('Palette Removed', 'success');
});