package controllers

import (
"net/http"
"html/template"
"path/filepath"
)

type baseController struct {
	TemplateDir string
	TemplateName string
	Handlers map[string]http.HandlerFunc
}

type basicController struct {
	FileName string
}

func NewBasic(fileName string) *basicController  {
	return &basicController{FileName:fileName}
}

func New(templateDir string, templateName string) *baseController  {
	return &baseController{TemplateDir:templateDir, TemplateName:templateName}
}

func NewCustom(templateDir string, templateName string, handlers map[string]http.HandlerFunc) *baseController {
	return &baseController{TemplateDir:templateDir, TemplateName:templateName, Handlers:handlers}
}

func (basic basicController) ServeHTTP(w http.ResponseWriter, r *http.Request)  {
	t, e := template.ParseFiles(BaseDir("html/" + basic.FileName))
	if e != nil {
		panic(e)
	}
	t.ExecuteTemplate(w, basic.FileName, nil)
}

func (h baseController) ServeHTTP(w http.ResponseWriter, r *http.Request)  {

	if handler, ok := h.Handlers[r.Method]; ok {
		handler(w, r)
	} else {
		t, err := template.ParseFiles(BaseDir("templates/header.html"), BaseDir(h.TemplateDir))
		if err != nil{
			panic(err)
		}
		t.ExecuteTemplate(w, h.TemplateName, nil)
	}
}

func BaseDir(dir string) string  {
	baseDir, err := filepath.Abs("./")
	if err != nil {
		panic(err)
	}
	return baseDir + "/" + dir
}