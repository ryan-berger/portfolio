package main

import (
	"github.com/ryan-berger/portfolio/controllers"
	"fmt"

	"net/http"
	"github.com/ryan-berger/portfolio/handlers"
)

func main()  {
	http.HandleFunc("/", handlers.HeaderHandler("html/index.html", "index.html", "Ryan Berger"))
	http.Handle("/portfolio/", controllers.New("html/portfolio.html", "portfolio.html"))
	http.Handle("/contact/", controllers.New("html/contact.html", "contact.html"))
	http.Handle("/static/",
		http.FileServer(http.Dir("")))
	fmt.Println("Running server on 0.0.0.0:4337")
	http.ListenAndServe("0.0.0.0:4337", nil)
}
