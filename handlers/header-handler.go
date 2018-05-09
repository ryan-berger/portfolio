package handlers

import (
	"net/http"
	"html/template"
	"path/filepath"
)

func baseDir(dir string) string  {
	baseDir, err := filepath.Abs("./")
	if err != nil {
		panic(err)
	}
	return baseDir + "/" + dir
}

func HeaderHandler(dir, name, header string) func(writer http.ResponseWriter, request *http.Request)  {
	return func(writer http.ResponseWriter, request *http.Request) {
		t, err := template.ParseFiles(baseDir("templates/header.html"), baseDir(dir))
		if err != nil{
			panic(err)
		}
		t.ExecuteTemplate(writer, name, "Yeet")
	}
}