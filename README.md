
# 🔐 Password Generator Web App

This is a simple JavaScript web application that generates two secure random passwords when a button is clicked. It uses a predefined set of characters including uppercase and lowercase letters, numbers, and symbols.

## 🚀 Features

- Generates two 12-character random passwords
- Uses uppercase, lowercase, digits, and special characters
- Passwords display on buttons
- "Clear" button resets the generated passwords to default labels

## 🧱 Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)



## 🛠 How It Works

- When you click the **"Generate Password"** button:
  - Two random 12-character passwords are generated using characters from a predefined array.
  - These passwords are displayed on two separate buttons.
- Clicking the **"Clear"** button resets the buttons back to "Password 1" and "Password 2".

## 📂 File Structure

```

index.html
style.css
script.js
README.md

````

## 🧪 Example Character Set Used

```javascript
const characters = [
  "A", "B", ..., "z", "0", "1", ..., "9", 
  "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", 
  "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", 
  ",", "|", ":", ";", "<", ">", ".", "?", "/"
];
````

## 🧰 How to Use

1. Open the `index.html` file in your browser.
2. Click the **Generate Password** button.
3. View the two generated passwords on the buttons.
4. Click **Clear** to reset them.

## 📌 Future Enhancements (Optional)

* Add copy-to-clipboard functionality
* Let users choose password length
* Add checkboxes to customize character types

## 📄 License

This project is open source and free to use.

```

---



