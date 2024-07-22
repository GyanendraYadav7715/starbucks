function showContent(type) {
    const contentDiv = document.getElementById('content');


    gsap.to(contentDiv, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            let content = '';

            switch (type) {
                case 'drink':
                    content = `
                        <h2 class="content-heading1">Drinks</h2>
                        <div class="food-section">
                            <div class="food-item inline-block">
                                <img src="/6.avif" alt="Food Item 1">
                                <p class="content-para">Ice Tea and Lemonade</p>
                            </div>
                            <div class="food-item inline-block">
                                <img src="/10.avif" alt="Food Item 2">
                                <p class="content-para">Hot Coffee</p>
                            </div>
                            <div class="food-item inline-block">
                                <img src="/20.avif" alt="Food Item 2">
                                <p class="content-para">Bottled Beverages</p>
                            </div>
                            <div class="food-item inline-block">
                                <img src="/16.avif" alt="Food Item 3">
                                <p class="content-para">Frappuccino Blended Beverages</p>
                            </div>
                        </div>
                    `;
                    break;

                case 'food':
                    content = `
                        <h2 class="content-heading1">Food</h2>
                        <div class="food-section">
                            <div class="food-item inline-block">
                                <img src="/9.avif" alt="Food Item 1">
                                <p class="content-para">Egg, Pesto & Mozzarella Sandwich</p>
                            </div>
                            <div class="food-item inline-block">
                                <img src="/12f.jpg" alt="Food Item 2">
                                <p class="content-para">Plain Bagel</p>
                            </div>
                            <div class="food-item inline-block">
                                <img src="/19.avif" alt="Food Item 2">
                                <p class="content-para">Rolled & Steel-Cut Oatmeal</p>
                            </div>
                            <div class="food-item inline-block">
                                <img src="/17.jpg" alt="Food Item 3">
                                <p class="content-para">Crispy Grilled Cheese on Sourdough</p>
                            </div>
                        </div>
                    `;
                    break;

                case 'merchandise':
                    content = `
                        <h2 class="content-heading1">Merchandise</h2>
                        <div class="food-section">
                            <div class="food-item inline-block">
                                <img src="/7.avif" alt="Food Item 1">
                                <p class="content-para">French Press</p>
                            </div>
                            <div class="food-item inline-block">
                                <img src="/5.jpg" alt="Food Item 2">
                                <p class="content-para">Glass Mug</p>
                            </div>  
                            <div class="food-item inline-block">
                                <img src="/4.avif" alt="Food Item 2">
                                <p class="content-para">Green Gradient Stainless-Steel Tumbler</p>
                            </div>
                            <div class="food-item  inline-block">
                                <img src="/GLASS_MUG.avif" alt="Food Item 3">
                                <p class="content-para">Glass Mug</p>
                            </div>
                        </div>
                    `;
                    break;
            }

            contentDiv.innerHTML = content;


            gsap.fromTo(contentDiv, { opacity: 0 }, { opacity: 1, duration: 0.5 });


            // const images = contentDiv.querySelectorAll('.food-item img');
            // images.forEach((img, index) => {
            //     gsap.from(img, {
            //         x: -50,
            //         opacity: 0,
            //         duration: 1,
            //         delay: index * 0.2,
            //         ease: 'power2.out'
            //     });
            // });
           
            
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    showContent('drink');
});
