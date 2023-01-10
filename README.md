# Node-Js-URL-Scraping-
Word Scraping from URL iN Node Js

Task:
Your task is to build a simple Node.js application that allows users to submit a URL, and
then returns a list of the most common words found on the page at that URL.
This is a paid trial task. Please let us know how many hours you would expect this task
to take.
The application should have a single endpoint that accepts a GET request with a url
query parameter, and returns a JSON object with a list of the 100 most common words
found on the page, along with the number of times each word appears. The endpoint
should return an error if the provided URL is invalid or if there is an error fetching the
page.

Requirements:
The application should be built using Node.js and Express.
The application should use a package like request or axios to fetch the HTML of
the page at the provided URL.
The application should parse the HTML to extract the text from the page and count
the frequency of each word.
The application should return the list of common words as a JSON object, with the
words as keys and their frequencies as values.