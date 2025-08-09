site "sampleapp" {
  host = "localhost:3000"
  dist = "../dist"

  if {
    logic = logic.index
  }
}
