# Use the official Ruby image as a parent image
FROM ruby:3.3.4

# Set environment variables
ENV BUNDLER_VERSION=2.5.14

# Install Bundler
RUN gem install bundler -v $BUNDLER_VERSION

# Set the working directory inside the container
WORKDIR /monero-site

# Copy the Gemfile and Gemfile.lock into the container
COPY Gemfile Gemfile.lock ./

# Install gems specified in the Gemfile
RUN bundle install

# Copy the rest of the application code into the container
COPY . .

# Set the default command to run Jekyll and serve the site
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--limit-posts", "1"]
