* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

body {
  background: #f4f7f4;
  color: #222;
}

/* Header */
header {
  background: #198754;
  color: white;
  padding: 18px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
}

header h1 {
  font-size: 24px;
}

.cart-btn {
  background: white;
  color: #198754;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

/* Hero */
.hero {
  text-align: center;
  padding: 50px 20px;
  background: #dff7e8;
}

.hero h2 {
  color: #198754;
  font-size: 34px;
  margin-bottom: 10px;
}

.hero p {
  font-size: 18px;
  margin-bottom: 20px;
}

.search {
  width: 90%;
  max-width: 500px;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

/* Products */
.products {
  padding: 35px 5%;
}

.products h2 {
  text-align: center;
  margin-bottom: 25px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}

.product {
  background: white;
  padding: 20px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
}

.emoji {
  font-size: 50px;
}

.product h3 {
  margin: 10px 0;
}

.price {
  color: #198754;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.add-btn {
  background: #198754;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 7px;
  cursor: pointer;
}

.add-btn:hover {
  background: #146c43;
}

/* About */
.about {
  background: white;
  text-align: center;
  padding: 35px 20px;
}

.about h2 {
  color: #198754;
  margin-bottom: 10px;
}

/* Footer */
footer {
  background: #222;
  color: white;
  text-align: center;
  padding: 20px;
}

/* Cart */
.cart {
  position: fixed;
  right: -400px;
  top: 0;
  width: 350px;
  max-width: 90%;
  height: 100%;
  background: white;
  padding: 25px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  z-index: 100;
  overflow-y: auto;
}

.cart.open {
  right: 0;
}

.close {
  float: right;
  border: none;
  padding: 7px 10px;
  cursor: pointer;
}

.cart h2 {
  color: #198754;
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #ddd;
}

.remove {
  background: #dc3545;
  color: white;
  border: none;
  padding: 5px 8px;
  border-radius: 5px;
  cursor: pointer;
}

.order {
  width: 100%;
  margin-top: 20px;
  padding: 13px;
  background: #25d366;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

/* Mobile */
@media (max-width: 600px) {

  header h1 {
    font-size: 19px;
  }

  .hero h2 {
    font-size: 28px;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .product {
    padding: 15px;
  }

}
