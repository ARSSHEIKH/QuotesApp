
        AOS.init();
        let realData = "";
        let quotesData = "";
        let quotesAuthor = "";
        let rnum = ""
        const quotes = document.getElementById("quotes")
        const author = document.getElementById("author")

        const tweetNow = () => {
            const tweetPost = `https://twitter.com/intent/tweet?text=${realData[rnum].text}`;
            window.open(tweetPost)
        }
        const getNewQuotes = () => {
            rnum = Math.floor(Math.random() * 1642);

            quotesData = realData[rnum];

            quotes.innerHTML = `${realData[rnum].text}`
            quotesData.author === null
                ? author.innerHTML = "by: Unknown"
                : author.innerHTML = `by: ${quotesData.author}`


        }
        const getQuotes = async () => {
            const api = "https://type.fit/api/quotes";
            try {
                let data = await fetch(api);
                realData = await data.json();
                getNewQuotes()
            } catch (error) {

            }
        }
        getQuotes()