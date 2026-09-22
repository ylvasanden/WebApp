Docker commands:

# First start, or after changes in dependencies/ in Dockerfile 
docker compose up --build

# Normal start 
docker compose up

# Start in the background - (no logs in terminal)
docker compose up -d

# Check container status 
docker compose ps

# View logs 
docker compose logs -f

# Stop and remove containers, but keep database data 
docker compose down

# Restart one service 
docker compose restart backend

# Delete containers and all local database data # Use carefully 
docker compose down --volumes

