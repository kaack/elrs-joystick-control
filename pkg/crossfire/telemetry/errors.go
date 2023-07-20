package telemetry

type InterruptedError struct {
}

func (i *InterruptedError) Error() string {
	return "goroutine was interrupted"
}
