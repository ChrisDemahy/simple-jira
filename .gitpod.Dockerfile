FROM gitpod/workspace-full

# Install cus# Install custom tools, runtime, etc.
RUN sudo add-apt-repository ppa:redislabs/redis \
    && sudo apt-get update \
    && sudo apt-get install -y redis postgresql \
    && sudo rm -rf /var/lib/apt/lists/*

# Install ZSH for terminal happiness
RUN sudo sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"