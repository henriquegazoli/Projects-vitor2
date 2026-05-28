terraform {
  backend "s3" {
    bucket = "terraform-state-vitor-2"
    key    = "terraform.tfstate"
    region = "us-east-2"
    profile = "hgm"
  }
}
