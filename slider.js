function showContent(type) {
    const contentDiv = document.getElementById('content');
    let content = '';

    switch (type) {

        case 'drink':
            content = `
               
                <h2  class="content-heading">Drinks</h2>
                    <div class='food-section'>
                        <div class="food-item">

                            <img src="images/6.avif" alt="Food Item 1">
                                <p class="content-para">Ice Tea and Lemonade</p>
                        </div>
                        <div class="food-item">

                            <img src="images/10.avif" alt="Food Item 2">
                                <p class="content-para">Hot Coffee</p>
                        </div>
                        <div class="food-item">

                            <img src="images/20.avif" alt="Food Item 2">
                                <p class="content-para">Bottled Beverages</p>
                        </div>
                        <div class="food-item">

                            <img src="images/16.avif" alt="Food Item 3">
                                <p class="content-para">Frappuccino Blanded Beverages</p>
                        </div>

                    </div>
              
            `;
            break;

        case 'food':
            content = `
               
                <h2 class="content-heading">Food</h2>
                    <div class='food-section'>
                        <div class="food-item">

                            <img src="images/9.avif" alt="Food Item 1">
                                <p class="content-para">Egg, Pesto & Mozzarella Sandwich</p>
                        </div>
                        <div class="food-item">

                            <img src="images/12f.jpg" alt="Food Item 2">
                                <p class="content-para">Plain Bagel</p>
                        </div>
                        <div class="food-item">

                            <img src="images/19.avif" alt="Food Item 2">
                                <p class="content-para">Rolled & Steel-Cut Oatmeal</p>
                        </div>
                        <div class="food-item">

                            <img src="images/17.jpg" alt="Food Item 3">
                                <p class="content-para">Crispy Grilled Cheese on Sourdough</p>
                        </div>

                    </div>
              
            `;
            break;

        case 'merchandise':
            content = `
               
                <h2 class="content-heading">Merchandise</h2>
                    <div class='food-section'>
                        <div class="food-item">

                            <img src="images/7.avif" alt="Food Item 1">
                                <p class="content-para">French Press</p>
                        </div>
                        <div class="food-item">

                            <img src="images/5.jpg" alt="Food Item 2">
                                <p class="content-para">Glass Mug</p>
                        </div>
                        <div class="food-item">

                            <img src="images/4.avif" alt="Food Item 2">
                                <p class="content-para">Green Gradient Stainless-Steel Tumbler</p>
                        </div>
                        <div class="food-item">

                            <img src="images/GLASS_MUG.avif" alt="Food Item 3">
                                <p class="content-para">Glass Mug</p>
                        </div>

                    </div>
              
            `;
            break;
        default:
            content = `
                <h2>Welcome</h2>
                <p>Click on an item to see more information.</p>
            `;
    }

    contentDiv.innerHTML = content;
}
