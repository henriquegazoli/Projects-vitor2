variable "aws_region" {
  description = "Região da AWS onde o bucket será criado"
  type        = string
  default     = "us-east-2"
}

variable "bucket_name1" {
  description = "Nome global único do bucket S3"
  type        = string
  default     = "bucket-terraform-123456789"
}

variable "bucket_name2" {
  description = "Nome global único do bucket S3"
  type        = string
  default     = "bucket-terraform-987654321"
}

variable "tag_projeto" {
  description = "Tag do projeto para os recursos"
  type        = string
  default     = "MeuProjeto"
}
