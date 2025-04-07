import React from 'react';

const Navbar = () => {
	return (
		<div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
        <a className="btn btn-ghost text-xl">My Blog</a>
  </div>
  <div className="flex-none">

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
                src="https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-1/457441194_911974264075148_7976939439815075705_n.jpg?stp=c9.3.894.894a_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGvZk6wUsGdo1rL1PrlAqCRR7cH0jgUQE5HtwfSOBRATh_GmIFpZI1CJoUiQB6jI68hDbiOgQwhsGDHYwsTNUsw&_nc_ohc=hLrBrYOQNQEQ7kNvwEAqYQ5&_nc_oc=Adlrh2cjnlOYzUqQ-h09WYjL6uMImiXCqsv0G-oSis5qSAYsBMfXkzNq3if119igBcDcnOqtdZT9e-juCNOzHI7t&_nc_zt=24&_nc_ht=scontent.fdac3-2.fna&_nc_gid=aoMCII1MApW0xKqUP6mTMg&oh=00_AfGLAHl-5QrBnYgPTD2vMQAwkwVFBtiWacCFS0NJstYBSQ&oe=67F9188E" />
        </div>
      </div>

    </div>
  </div>
</div>
	);
};

export default Navbar;