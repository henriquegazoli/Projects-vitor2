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


### EC2
resource "aws_security_group" "allow_tls" {
  name        = "allow_tls"
  description = "Allow TLS inbound traffic and all outbound traffic"
  vpc_id      = "vpc-046dac4995402be59"

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # ajuste para o seu range
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
    Name = "allow_tls"
  }
}

resource "aws_instance" "python" {
  ami           = "ami-0fe18bc3cfa53a248"
  instance_type = "t3.micro"
  subnet_id = "subnet-0c95560dce7330bc2"
  key_name = "docker-vm-key"
  associate_public_ip_address = true
  security_groups = [ aws_security_group.allow_tls.id ]
  depends_on = [ aws_security_group.allow_tls ]
  tags = {
    Name = "vm-docker-vitor2"
  }
}