### BUCKETS S3
resource "aws_s3_bucket" "bucket1" {
  bucket = var.bucket_name1
  tags = {
    Projeto = var.tag_projeto
    bucket = "bucket1"
  }
}

resource "aws_s3_bucket" "bucket2" {
  bucket = var.bucket_name2
  tags = {
    Projeto = var.tag_projeto
    bucket = "bucket2"    
  }
}
resource "aws_s3_bucket" "bucket3" {
  bucket = var.bucket_name3
  tags = {
    Projeto = var.tag_projeto
    bucket = "bucket3"
  }
}
