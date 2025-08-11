site "sampleapp" {
  host = "kakkofn.dev"
  port = 80
  dist = "../dist"

  if {
    logic = logic.index
  }
}
