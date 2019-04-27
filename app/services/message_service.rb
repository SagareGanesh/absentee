class MessageService

  attr_accessor :is_sent
  
  def initialize(text_msg, mobile_nos, user)
    @msg = text_msg
    @mobile_nos = inventory_type
    @is_other_lang = (user.school.language != 'en')
    @is_sent = false
  end

  def send_sms
    url = URI.parse(TEXT_LOCAL_HOST)

    response = Net::HTTP.post_form(url, apiKey: TEXT_LOCAL_API_KEY, sender: 'TXTLCL', message: @msg.squish, numbers: @mobile_nos, unicode: is_other_lang)
    status = JSON.parse(response.body)['status']
    @is_sent = status.eql?('success') ? true : false
  end
end