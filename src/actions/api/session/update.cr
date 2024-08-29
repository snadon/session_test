class Api::Session::Update < ApiAction
  param state : Bool

  post "/api/session" do
    context.session.set(:state, state.to_s)
    puts "configuring: #{state}"
    json({"Session::Update", session.get(:state)})
  end
end
