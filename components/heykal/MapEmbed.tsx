/** Replace `src` with your verified Google Maps embed when you publish a public address. */
export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-sm border border-border">
      <iframe
        title="Heykal operations — map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133389887!2d-73.98811768459418!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
        className="aspect-[4/3] h-[320px] w-full sm:h-[400px]"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
