# 🔗 URL Shortener

A simple and efficient URL shortening web application built using **Node.js**, **Express**, **MongoDB**, and **EJS** template engine for server-side rendered frontend. This app allows users to generate short URLs that redirect to original long URLs.

---

## 📂 Project Structure

```
URL_Shortener/
│
├── models/              # Mongoose schema for URL storage
├── public/              # Static assets (CSS, JS)
├── routes/              # Route handlers for homepage and redirection
├── views/               # EJS templates (index, success page, error pages)
├── .env                 # Environment variables (e.g. MongoDB URI)
├── server.js            # Entry point of the application
└── package.json         # Project metadata and dependencies
```

---

## ✨ Features

* 🔗 Shorten any valid URL
* 🔀 Autogenerate unique short codes
* ⏩ Redirect to original URL using the short code
* 🧠 Validates and filters user input
* 🗂️ Stores URL mappings in MongoDB
* 🎨 Simple and responsive EJS-based UI

---

## 🔧 Tech Stack

* **Backend**: Node.js, Express.js
* **Frontend**: EJS (Embedded JavaScript Templates), CSS
* **Database**: MongoDB with Mongoose
* **Utilities**: shortid/nanoid for unique short codes, dotenv for config

---

## 🚧 How It Works

1. User submits a long URL via the homepage form.
2. Server checks if URL already exists or generates a new short ID.
3. URL and its short version are stored in MongoDB.
4. User is shown a success page with their shortened link.
5. Visiting the short link redirects to the original long URL.

---

## 🧹 Setup & Installation

```bash
# Clone the repo
git clone https://github.com/abhi172004/URL_Shortener.git
cd URL_Shortener
```

Install dependencies:

```bash
npm install express mongoose cookie-parser ejs shortid bcryptjs jsonwebtoken dotenv
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run the app:

```bash
npm start
```

Server runs on `http://localhost:PORT_NO`

---

## 📸 Screenshots
<img width="1903" height="968" alt="image" src="https://github.com/user-attachments/assets/6e07594d-9369-45be-ada9-23ba07d3d57b" />
<img width="1895" height="962" alt="image" src="https://github.com/user-attachments/assets/9f7f49d8-50ab-45dc-98b8-80505fa8aef6" />
<img width="1912" height="962" alt="image" src="https://github.com/user-attachments/assets/6e057c15-eb59-4e38-8538-c383a7e47376" />
<img width="1905" height="962" alt="image" src="https://github.com/user-attachments/assets/9943b0a1-a510-4c60-8f1b-143b941e18a8" />


---

## 🔄 Future Enhancements

* Add user authentication for saved URL history
* Custom short link support
* RESTful API endpoints for external integrations

---

## 🤝 Contributing

1. Fork this repo
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to your fork (`git push origin feature-name`)
5. Create a pull request describing your updates

---

## 👤 Author

**Abhijeet Bhise** – Full‑Stack Developer
GitHub: [@abhi172004](https://github.com/abhi172004)
