package com.zcsoft.rc.bms.app.chain.command;

import com.sharingif.cube.core.exception.CubeException;
import com.sharingif.cube.core.handler.chain.HandlerMethodContent;
import com.sharingif.cube.core.handler.chain.command.AbstractHandlerMethodCommand;
import com.zcsoft.rc.bms.api.user.entity.UserLoginReq;
import com.zcsoft.rc.user.model.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserLoginReqConvertToUserCommand extends AbstractHandlerMethodCommand {

    @Override
    public void execute(HandlerMethodContent content) throws CubeException {
        UserLoginReq req = content.getObject(UserLoginReq.class);

        User user = new User();
        user.setUsername(req.getUsername());
        user.setPassword(req.getPassword());

        Object[] args = {user};

        content.setArgs(args);
    }

}
