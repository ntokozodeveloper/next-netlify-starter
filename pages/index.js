// index.js
document.addEventListener("DOMContentLoaded", function() {
    // Create a div element to contain the HTML content
    var container = document.createElement("div");

    // Set the HTML content to the provided HTML code
    container.innerHTML = `
        <!-- Paste your HTML code here -->
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta name="robots" content="noindex">
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Forex Robots | Securely Pay Now</title>
            <link rel="icon" href="/favicon.ico" />
            <style>
                /* Paste your CSS styles here */
                /* ... */
            </style>
        </head>
        <body>
            <div class="container">
                <div class="section">
                    <h1>Secure Payment</h1>
                    <p>You can securely make your
                        Bitcoin Payment to the address listed below.
                    </p>
                    <button class="cta-btn" id="copyBtn" data-clipboard-text="3GBGxUQk6nPvy9EwSmitkzQeWovvkypnNd">Copy Bitcoin Address</button>
                    <div id="myModal" class="modal">
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <h3>Great, We're waiting for your payment!</h3>
                            <p>
                                You can now log into your bitcoin exchange 
                                provider (Binance, Coinbase Etc) and make
                                your payment to the bitcoin wallet address 
                                you just copied into your clipboard. 
                                Please send your confirmation to
                                <a style="color: #0080ff; text-decoration: none;" href="mailto:support@fxrobots.co.za">support@fxrobots.co.za</a>
                                <br><br>
                                <input class="input-field" type="text" placeholder="Paste our bitcoin address here to make sure you copied it!" name="text">
                                <br>
                                <span style="font-size: large;">
                                    3GBGxUQk6nPvy9EwSmitkzQeWovvkypnNd
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>
            <script>
                // Paste your JavaScript code here
                // ...
            </script>
        </body>
        </html>
    `;

    // Append the container to the document body
    document.body.appendChild(container);
});
