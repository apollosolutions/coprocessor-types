package main

type CoprocessorRequest struct {
	Version     int                  `json:"version"`
	Stage       Stage                `json:"stage"`
	Control     Control              `json:"control"`
	ID          string               `json:"id"`
	Headers     *map[string][]string `json:"headers,omitempty"`
	Body        *interface{}         `json:"body,omitempty"` // Body can be either an object containing the body of the request, or a string depending on the stage.
	Context     *Context             `json:"context,omitempty"`
	SDL         string               `json:"sdl,omitempty"`
	Path        string               `json:"path,omitempty"`
	Method      string               `json:"method,omitempty"`
	ServiceName string               `json:"serviceName,omitempty"`
	URI         string               `json:"uri,omitempty"`
	StatusCode  *int                 `json:"statusCode,omitempty"`
	HasNext     *bool                `json:"hasNext,omitempty"`
}

type CoprocessorResponse struct {
	Control ControlResponse     `json:"control"`
	Body    interface{}         `json:"body,omitempty"`
	Headers map[string][]string `json:"headers,omitempty"`
	Context Context             `json:"context,omitempty"`
}

type Stage string

const (
	RouterRequest      Stage = "RouterRequest"
	RouterResponse     Stage = "RouterResponse"
	SupergraphRequest  Stage = "SupergraphRequest"
	SupergraphResponse Stage = "SupergraphResponse"
	SubgraphRequest    Stage = "SubgraphRequest"
	SubgraphResponse   Stage = "SubgraphResponse"
)

type Control interface{}

type ContinueControl struct{}

type BreakControl struct {
	Break int `json:"break"`
}

type ControlResponse struct {
	Control
}

type Context struct {
	Entries map[string]interface{} `json:"entries"`
}
