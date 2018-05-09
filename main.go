package main

import (
	"fmt"

	"net/http"
	"github.com/ryan-berger/portfolio/handlers"
)

func main()  {
	http.HandleFunc("/", handlers.HeaderHandler("html/index.html", "index.html", ""))
	http.HandleFunc("/portfolio/", handlers.HeaderHandler("html/portfolio.html", "portfolio.html", "Portfolio"))
	http.HandleFunc("/contact/", handlers.HeaderHandler("html/contact.html", "contact.html", "Contact"))
	http.Handle("/static/",
		http.FileServer(http.Dir("")))
	fmt.Println("Running server on 0.0.0.0:4337")
	http.ListenAndServe("0.0.0.0:4337", nil)
}
