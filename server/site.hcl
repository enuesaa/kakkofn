site "sampleapp" {
  host = "localhost"
  port = 80
  dist = "../dist"

  if {
    logic = logic.index
  }
}
