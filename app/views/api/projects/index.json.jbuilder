@projects.each do |project|
  json.set! project.id do
    json.extract! project,
      :id,
      :title,
      :description,
      :image_url,
      :github_url,
      :live_url,
      :stack
    end
end
