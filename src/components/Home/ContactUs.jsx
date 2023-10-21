import contactPic from '../../assets/undraw_People_search_re_5rre.png'
const ContactUs = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={contactPic} className='max-w-sm' />
                    <div>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-center font-semibold text-3xl">Contact Us</h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <label className="input-group">
                                        <span>Email</span>
                                        <input type="text" placeholder="info@site.com" className="input input-bordered" />
                                    </label>
                                </div>
                                <textarea className="textarea textarea-ghost border-inherit" placeholder="message"></textarea>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;