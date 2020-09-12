# public-website
This is the code running on my website borsoi.co.uk 

A Terraform script takes this code and pushes it in /var/www/ for every new EC2 server that the load balancer spins up, or every time I update this repo.

Here is an example of a Terraform script that spins up a web server, and runs this code: https://github.com/mattiaborsoi/terraform-vpn-italy [coming soon]