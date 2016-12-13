@projects.each do |project|
  json.set! project.id do
    json.extract! project,
      :id,
      :title,
      :image_url,
      :live_url
    end
end
