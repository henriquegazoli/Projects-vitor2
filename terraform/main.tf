module "s3" {
  source = "./modules/s3" 
  bucket_name = "bucket-dev-vitor-hgm"
  tag_projeto = "Projeto S3"
}