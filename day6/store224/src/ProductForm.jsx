import "./assets/ProductForm.css"

function ProductForm(){
    return (
        <div class="form-container">
            <h2>Ajouter un produit</h2>
            <form>
            <div class="form-group">
                <label for="email">Email client</label>
                <input type="email" id="email" name="email" required />
            </div>

            <div class="form-group">
                <label for="product">Nom du produit</label>
                <input type="text" id="product" name="product" required />
            </div>

            <div class="form-group">
                <label for="quantity">Quantité</label>
                <input type="number" id="quantity" name="quantity" min="1" required />
            </div>

            <div class="form-group">
                <label for="price">Prix (€)</label>
                <input type="number" id="price" name="price" step="0.01" min="0" required />
            </div>

            <button type="submit">Ajouter</button>
            </form>
        </div>        
    )
}
export default ProductForm;
