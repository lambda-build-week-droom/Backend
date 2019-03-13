select u.user_id,c.user_id,u.company_id,c.company_id,  u.job_id
from userJobSaves u
  left join companyUserSaves c
      on u.company_id = c.company_id 
      where u.user_id = c.user_id

