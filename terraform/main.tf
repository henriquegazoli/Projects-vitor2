module "dev" {
  source = "./modules/s3" 
  bucket_name = "bucket-dev-vitor-hgm"
  tag_projeto = "Projeto dev"
}

module "prod" {
  source = "./modules/s3" 
  bucket_name = "bucket-prod-vitor-hgm"
  tag_projeto = "Projeto prod"
}