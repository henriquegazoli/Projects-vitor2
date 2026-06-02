resource "aws_s3_bucket" "bucket" {
  bucket = var.bucket_name
  tags = {
    Projeto = var.tag_projeto
    bucket = var.bucket_name
  }
}

resource "aws_s3_bucket_lifecycle_configuration" "regra-expiracao" {
  bucket = aws_s3_bucket.bucket.id

  rule {
    id = "rule-1"
    status = "Enabled"

    filter {}
    expiration {
        days = 30
    }
  }
} 

resource "aws_s3_bucket_ownership_controls" "example" {
  bucket = aws_s3_bucket.bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}