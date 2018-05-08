package main

import (
	"github.com/ryan-berger/portfolio/controllers"
	"fmt"

	"net/http"
)

func main()  {
	http.Handle("/", controllers.New("html/index.html", "index.html"))
	http.Handle("/portfolio/", controllers.New("html/portfolio.html", "portfolio.html"))
	http.Handle("/contact/", controllers.New("html/contact.html", "contact.html"))
	http.Handle("/static/",
		http.FileServer(http.Dir("")))
	fmt.Println("Running server on 0.0.0.0:4337")
	http.ListenAndServe("0.0.0.0:4337", nil)
}
