### BUCKETS S3
resource "aws_s3_bucket" "bucket1" {
  bucket = var.bucket_name1
  tags = {
    Projeto = var.tag_projeto
  }
}

resource "aws_s3_bucket" "bucket2" {
  bucket = var.bucket_name2
  tags = {
    Projeto = var.tag_projeto
  }
}